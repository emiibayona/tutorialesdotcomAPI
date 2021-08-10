'use strict';
const { format } = require('../configs/db.config');
const dbConn = require('../configs/db.config');

let Tutorial = function (tuto) {

    this.created = new Date();
    this.title = tuto.title;
    this.description = tuto.description;
    this.status = tuto.status;

}

Tutorial.create = (newTuto, result) => {
    dbConn.query('INSERT INTO tutorial set ?', newTuto, (err, res) => {
        if (err) {
            console.log('Error catched: ', err)
            result(err, null)
        } else {

            result(null, res)
        }
    })
}

Tutorial.findAll = (result) => {
    dbConn.query('select * from tutorial', (err, res) => {
        if (err) {
            console.log('Catched error: ' + err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Tutorial.find = (id, result) => {
    dbConn.query('select * from tutorial where id = ? ', id, (err, res) => {
        if (err) {
            console.log('Catched error: ' + err)
            result(err, null)
        } else {
            result(null, res)
        }
    });
}

module.exports = Tutorial;