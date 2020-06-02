const { Router } = require('express')
const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const RoomController = require('./controllers/RoomController')
const ShowRoomController = require('./controllers/ShowRoomController')

const routes = Router()

routes.post('/users', UserController.create)
routes.get('/users', UserController.index)

routes.post('/sessions', SessionController.create)

routes.post('/rooms', RoomController.create)
routes.delete('/rooms/:_id', RoomController.delete)
routes.get('/rooms/:user_id', RoomController.index)

routes.get('/showrooms', ShowRoomController.index)

module.exports = routes