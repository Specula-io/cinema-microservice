module.exports = {
  apps: [{
    name: 'api-gateway',
    script: 'npm run start',
    watch: '.',
    cwd: './api-gateway',
    env: {
      DB: 'booking',
      DB_USER: 'root',
      DB_PASS: '123123',
      CLIENT_ID: 'cb92ed50-5d9b-11eb-8635-6163697fc1b6',
      CLIENT_SECRET: '5af7929af1a77a5088d327a625a546028259c7f1',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      PORT: 8081,
      MOVIES_SERVICE_TARGET: 'http://127.0.0.1:3000',
      BOOKING_SERVICE_TARGET: 'http://127.0.0.1:3001',
      PAYMENT_SERVICE_TARGET: 'http://127.0.0.1:3002',
      CINEMA_CATALOG_SERVICE_TARGET: 'http://127.0.0.1:3003',
      NOTIFICATION_SERVICE_TARGET: 'http://127.0.0.1:3006'
    }
  }, {
    name: 'movies-service',
    script: 'npm run start',
    watch: '.',
    cwd: './movies-service',
    env: {
      DB: 'booking',
      DB_USER: 'root',
      DB_PASS: '123123',
      CLIENT_ID: 'cb92ed50-5d9b-11eb-8635-6163697fc1b6',
      CLIENT_SECRET: '5af7929af1a77a5088d327a625a546028259c7f1',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      DB_SERVERS: 'localhost:27017',
      PORT: 3000
    }
  }, {
    name: 'booking-service',
    script: 'npm run start',
    watch: '.',
    cwd: './booking-service',
    env: {
      DB: 'booking',
      DB_USER: 'root',
      DB_PASS: '123123',
      CLIENT_ID: 'cb92ed50-5d9b-11eb-8635-6163697fc1b6',
      CLIENT_SECRET: '5af7929af1a77a5088d327a625a546028259c7f1',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      DB_SERVERS: '127.0.0.1:27017',
      PORT: 3001,
      PAYMENT_SERVICE_TARGET: 'http://127.0.0.1:3002',
      NOTIFICATION_SERVICE_TARGET: 'http://127.0.0.1:3006'
    }
  }, {
    name: 'cinema-catalog-service',
    script: 'npm run start',
    watch: '.',
    cwd: './cinema-catalog-service',
    env: {
      DB: 'cinemas',
      DB_USER: 'root',
      DB_PASS: '123123',
      CLIENT_ID: 'cb92ed50-5d9b-11eb-8635-6163697fc1b6',
      CLIENT_SECRET: '5af7929af1a77a5088d327a625a546028259c7f1',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      DB_SERVERS: 'localhost:27017',
      PORT: 3003
    }
  }, {
    name: 'notification-service',
    script: 'npm run start',
    watch: '.',
    cwd: './notification-service',
    env: {
      DB: 'booking',
      DB_USER: 'root',
      DB_PASS: '123123',
      DB_SERVERS: 'localhost:27017',
      PORT: 3006,
      CLIENT_ID: 'cb92ed50-5d9b-11eb-8635-6163697fc1b6',
      CLIENT_SECRET: '5af7929af1a77a5088d327a625a546028259c7f1',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      EMAIL: 'speculaiodev@gmail.com',
      EMAIL_PASS: 'fpu%S8WYHyMK'
    }
  }, {
    name: 'payment-service',
    script: 'npm run start',
    watch: '.',
    cwd: './payment-service',
    env: {
      DB: 'booking',
      DB_USER: 'root',
      DB_PASS: '123123',
      CLIENT_ID: 'cb92ed50-5d9b-11eb-8635-6163697fc1b6',
      CLIENT_SECRET: '5af7929af1a77a5088d327a625a546028259c7f1',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      DB_SERVERS: 'localhost:27017',
      PORT: 3002
    }
  }]
};
