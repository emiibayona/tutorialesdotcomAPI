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

Tutorial.update = (updTuto, result) => {
    const dated = new Date();
    dbConn.query('update tutorial set title = ?, description = ?, updated = ?, status = ? where id = ?', [updTuto.title, updTuto.description, dated, updTuto.status, updTuto.id], (err, res) => {
        if (err)
            result(err, null)
        else
            result(null, res)
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

Tutorial.findByTitle = (title, result) => {

    const query = `select * from tutorial where title like '%${title}%'`
    dbConn.query(query, (err, res) => {
        try {
            if (err) {
                console.log('Catched error: ' + err)
                result(err, null)
            } else {
                result(null, res)
            }
        } catch (error) {
            console.log(error)
        }
    });

}


Tutorial.delete= (id, result) => {
    const query = `delete from tutorial where id = '${id}'`
    dbConn.query(query, (err,res)=> {
        try{
if(err){
result(err,null)
}else{
result(null, res)
}
        }catch(error){
            console.log(error)
        }
    })
}

module.exports = Tutorial;