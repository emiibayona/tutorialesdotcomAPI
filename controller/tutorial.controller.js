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

exports.findAll = (req, res) => {

    Tutorial.findAll((err, response) => {
        if (err) return res.send(err);

        res.json({
            error: false,
            message: 'OK',
            data: response,
        })
    })
}

exports.find = (req, res) => {

    const id = req.params.id

    if (typeof (id) === 'undefined') {
        var msg = 'El id no esta definido';
        res.json({
            error: true,
            message: msg,
        });
    } else {
        Tutorial.find(id, (err, response) => {
            if (err) return res.send(err);

            res.json({
                error: false,
                message: 'OK',
                data: response,
            });
        });
    }
}