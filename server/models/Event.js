const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, ref: 'Coin'},
    max: {type: Number, required: true},
    min: {type: Number, required: true},
    owner: {type: Types.ObjectId, ref: 'User'},
    parent: {type: String, required: true}
})

module.exports = model('Event', schema)
