'use strict';
const mongoose = require('mongoose');

const schema_rutina = mongoose.Schema({

    creacion: { type: Date, required: true, unique: false },
    vencimiento: { type: Date, required: true, unique: false },
    ejercicios: [
        {
            type: mongoose.schema.Types.ObjectId,
            ref:'Ejercicio'
        }
    ]
  

});

module.exports = mongoose.model('Rurina', schema_ejercicio, 'rutinas');