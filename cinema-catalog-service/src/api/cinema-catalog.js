'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const {repo} = options
  
  app.get('/countries', (req, res, next) => {
    repo.getCountries()
      .then(countries => {
        res.status(status.OK).json(countries)
      })
      .catch(next)
  })
  
  app.get('/states', (req, res, next) => {
    repo.getStates(req.query.countryId)
      .then(countries => {
        res.status(status.OK).json(countries)
      })
      .catch(next)
  })
  
  app.get('/cities', (req, res, next) => {
    repo.getCities(req.query.stateId)
      .then(countries => {
        res.status(status.OK).json(countries)
      })
      .catch(next)
  })

  app.get('/cinemas', (req, res, next) => {
    repo.getCinemasByCity(req.query.cityId)
      .then(cinemas => {
        res.status(status.OK).json(cinemas)
      })
      .catch(next)
  })

  app.get('/cinemas/:cinemaId', (req, res, next) => {
    repo.getCinemaById(req.params.cinemaId)
      .then(cinema => {
        res.status(status.OK).json(cinema)
      })
      .catch(next)
  })

  app.get('/cinemas/:cityId/:movieId', (req, res, next) => {
    const params = {
      cityId: req.params.cityId,
      movieId: req.params.movieId
    }
    repo.getCinemaScheduleByMovie(params)
      .then(schedules => {
        res.status(status.OK).json(schedules)
      })
      .catch(next)
  })
}
