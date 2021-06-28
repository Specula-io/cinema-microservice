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
      CLIENT_ID: 'a39087b1-8c44-478d-81cd-cbaee04cf212',
      CLIENT_SECRET: '565b5d1b4ed092b0951222447d69318c59e54f8f',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      PORT: 8581,
      MOVIES_SERVICE_TARGET: 'http://127.0.0.1:4000',
      BOOKING_SERVICE_TARGET: 'http://127.0.0.1:4001',
      PAYMENT_SERVICE_TARGET: 'http://127.0.0.1:4002',
      CINEMA_CATALOG_SERVICE_TARGET: 'http://127.0.0.1:4003',
      NOTIFICATION_SERVICE_TARGET: 'http://127.0.0.1:4006'
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
      CLIENT_ID: 'a39087b1-8c44-478d-81cd-cbaee04cf212',
      CLIENT_SECRET: '565b5d1b4ed092b0951222447d69318c59e54f8f',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      DB_SERVERS: 'localhost:27017',
      PORT: 4000
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
      CLIENT_ID: 'a39087b1-8c44-478d-81cd-cbaee04cf212',
      CLIENT_SECRET: '565b5d1b4ed092b0951222447d69318c59e54f8f',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      DB_SERVERS: '127.0.0.1:27017',
      PORT: 4001,
      PAYMENT_SERVICE_TARGET: 'http://127.0.0.1:4002',
      NOTIFICATION_SERVICE_TARGET: 'http://127.0.0.1:4006'
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
      CLIENT_ID: 'a39087b1-8c44-478d-81cd-cbaee04cf212',
      CLIENT_SECRET: '565b5d1b4ed092b0951222447d69318c59e54f8f',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      DB_SERVERS: 'localhost:27017',
      PORT: 4003
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
      PORT: 4006,
      CLIENT_ID: 'a39087b1-8c44-478d-81cd-cbaee04cf212',
      CLIENT_SECRET: '565b5d1b4ed092b0951222447d69318c59e54f8f',
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
      CLIENT_ID: 'a39087b1-8c44-478d-81cd-cbaee04cf212',
      CLIENT_SECRET: '565b5d1b4ed092b0951222447d69318c59e54f8f',
      SPECULA_APM_ENDPOINT: 'http://localhost:8082',
      DB_SERVERS: 'localhost:27017',
      PORT: 4002
    }
  }]
};
