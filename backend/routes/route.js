const express = require('express');
const Route = express.Router();
const {createUser , getUser , updateUser ,getUserById ,deleteUser} = require('../controller/controller')


Route.get('/',getUser);
Route.get('/:id',getUserById);
Route.post('/' ,createUser);
Route.patch('/:id',updateUser);
Route.delete('/:id',deleteUser);

module.exports = Route;