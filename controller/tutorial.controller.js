'use strict';
const Tutorial = require('../models/tutorial.model')

exports.create = (req, res) => {
    const newTuto = new Tutorial(req.body);


    if (req.body.constructor === Object && Object.keys(req.body).length < 3) {
        res.status(400).send({
            error: true,
            message: 'Porfavor ingrese todos los campos solicitados: title, description, status',
        });
    } else {
        Tutorial.create(newTuto, (err, tutorialCreated) => {
            if (err) return res.send(err);

            res.json({
                error: false,
                message: 'Tutorial agregado satisfactoriamente',
                data: tutorialCreated
            });
        });
    }
}



exports.update = (req, res) => {

    const updTuto = req.body;

    if (req.body.constructor === Object && Object.keys(req.body).length < 4) {
        res.status(400).send({
            error: true,
            message: 'Porfavor ingrese todos los campos solicitados: id,title, description, status',
        });
    } else {
        Tutorial.update(updTuto, (err, tutorialCreated) => {
            if (err) return res.send(err);

            res.json({
                error: false,
                message: 'Tutorial actualizado satisfactoriamente',
                data: tutorialCreated
            });
        });
    }
}


exports.find = (req, res) => {

    const idQuery = req.query.id
    const titleQuery = req.query.title

    if (idQuery) {
        console.log('Querying by ID')
        Tutorial.find(idQuery, (err, response) => {
            if (err) return res.send(err);

            res.json({
                error: false,
                message: 'OK',
                data: response,
            });
        });
    } else if (titleQuery) {
        console.log('Querying by Title')
        Tutorial.findByTitle(titleQuery, (err, response) => {
            if (err) return res.send(err);

            res.json({
                error: false,
                message: 'OK',
                data: response,
            });
        });
    } else {
        console.log('Querying all')
        Tutorial.findAll((err, response) => {
            if (err) return res.send(err);

            res.json({
                error: false,
                message: 'OK',
                data: response,
            })
        })
    }
}

exports.delete =(req,res) => {
    const idQuery = req.query.id

    if (idQuery) {
console.log('Deleting by query')
Tutorial.delete(idQuery, (err,response) => {
    if (err) return res.send(err);

            res.json({
                error: false,
                message: 'OK',
                data: response,
            });
})
    }else{
        res.json({
             error: true,
                message: 'FAIL',
                data: response,
        })
    }
}