'use strict'
require('dotenv').config()
const tracer = require('./specula-auto-tracer')
tracer.initialize({
  clientId: process.env.CLIENT_ID,
  auth: process.env.CLIENT_SECRET,
  endpoint: process.env.SPECULA_APM_ENDPOINT,
  serviceName: 'cinema-microservice::cinema-catalog-service',
  instrumentations: ['express', 'http', 'mongodb']
})
const {EventEmitter} = require('events')
const server = require('./server/server')
const repository = require('./repository/repository')
const config = require('./config/')
const mediator = new EventEmitter()

console.log('--- Cinemas Catalog Service ---')
console.log('Connecting to cinemas catalog repository...')

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
})

mediator.on('db.ready', (db) => {
  let rep
  repository.connect({db, ObjectID: config.ObjectID})
    .then(repo => {
      console.log('Connected. Starting Server')
      rep = repo
      return server.start({
        port: config.serverSettings.port,
        ssl: config.serverSettings.ssl,
        repo
      })
    })
    .then(app => {
      console.log(`Server started succesfully, running on port: ${config.serverSettings.port}.`)
      app.on('close', () => {
        rep.disconnect()
      })
    })
})

mediator.on('db.error', (err) => {
  console.error(err)
})

config.db.connect(config.dbSettings, mediator)

mediator.emit('boot.ready')
