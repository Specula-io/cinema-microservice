'use strict'

const repository = (connection) => {
  const {db, ObjectID} = connection
  
  const getCountries = () => {
    return new Promise((resolve, reject) => {
      const cinemas = []
      const query = {}
      const cursor = db.collection('countries').find(query)
      const addCinema = (cinema) => {
        cinemas.push(cinema)
      }
      const sendCinemas = (err) => {
        if (err) {
          reject(new Error('An error occured fetching countries, err: ' + err))
        }
        resolve(cinemas)
      }
      cursor.forEach(addCinema, sendCinemas)
    })
  }
  
  const getStates = (countryId) => {
    return new Promise((resolve, reject) => {
      const cinemas = []
      const query = countryId ? {country_id: countryId} : {}
      const cursor = db.collection('states').find(query)
      const addCinema = (cinema) => {
        cinemas.push(cinema)
      }
      const sendCinemas = (err) => {
        if (err) {
          reject(new Error('An error occured fetching countries, err: ' + err))
        }
        resolve(cinemas)
      }
      cursor.forEach(addCinema, sendCinemas)
    })
  }
  
  const getCities = (stateId) => {
    return new Promise((resolve, reject) => {
      const cinemas = []
      const query = stateId ? {state_id: stateId} : {}
      const cursor = db.collection('cities').find(query)
      const addCinema = (cinema) => {
        cinemas.push(cinema)
      }
      const sendCinemas = (err) => {
        if (err) {
          reject(new Error('An error occured fetching countries, err: ' + err))
        }
        resolve(cinemas)
      }
      cursor.forEach(addCinema, sendCinemas)
    })
  }

  const getCinemasByCity = (cityId) => {
    return new Promise((resolve, reject) => {
      const cinemas = []
      const query = cityId ? {city_id: cityId} : {}
      const projection = {_id: 1, name: 1}
      const cursor = db.collection('cinemas').find(query, projection)
      const addCinema = (cinema) => {
        cinemas.push(cinema)
      }
      const sendCinemas = (err) => {
        if (err) {
          reject(new Error('An error occured fetching cinemas, err: ' + err))
        }
        resolve(cinemas)
      }
      cursor.forEach(addCinema, sendCinemas)
    })
  }

  const getCinemaById = (cinemaId) => {
    return new Promise((resolve, reject) => {
      const query = {_id: new ObjectID(cinemaId)}
      const projection = {_id: 1, name: 1, cinemaPremieres: 1}
      const response = (err, cinema) => {
        if (err) {
          reject(new Error('An error occuered retrieving a cinema, err: ' + err))
        }
        resolve(cinema)
      }
      db.collection('cinemas').findOne(query, projection, response)
    })
  }

  const getCinemaScheduleByMovie = (options) => {
    return new Promise((resolve, reject) => {
      const match = { $match: {
        'city_id': options.cityId,
        'cinemaRooms.schedules.movie_id': options.movieId
      }}
      const project = { $project: {
        'name': 1,
        'cinemaRooms.schedules.time': 1,
        'cinemaRooms.name': 1,
        'cinemaRooms.format': 1
      }}
      const unwind = [{ $unwind: '$cinemaRooms' }, { $unwind: '$cinemaRooms.schedules' }]
      const group = [{ $group: {
        _id: {
          name: '$name',
          room: '$cinemaRooms.name'
        },
        schedules: { $addToSet: '$cinemaRooms.schedules.time' }
      }}, { $group: {
        _id: '$_id.name',
        schedules: {
          $addToSet: {
            room: '$_id.room',
            schedules: '$schedules'
          }
        }
      }}]
      const sendSchedules = (err, result) => {
        if (err) {
          reject('An error has occured fetching schedules by movie, err: ' + err)
        }
        resolve(result)
      }
      db.collection('cinemas').aggregate([match, project, ...unwind, ...group], sendSchedules)
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getCountries,
    getStates,
    getCities,
    getCinemasByCity,
    getCinemaById,
    getCinemaScheduleByMovie,
    disconnect
  })
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(connection))
  })
}

module.exports = Object.assign({}, {connect})
