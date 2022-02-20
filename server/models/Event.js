const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, ref: 'Coin'},
    max: {type: Number, required: true,},
    min: {type: Number, required: true}
})

module.exports = model('Event', schema)
