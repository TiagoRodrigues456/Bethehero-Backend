const express = require('express');


const OngControler = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require( './controllers/SessionsController');


// cors 

const routes = express.Router();

routes.post('/sessions', SessionsController.create);


routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);

routes.get('/profile' , ProfileController.index);


routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);

routes.delete('/incidents/:id', incidentController.delete);



    module.exports = routes;