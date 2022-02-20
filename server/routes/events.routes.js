const {Router} = require('express')
const router = Router()
const Event = require('../models/Event')
const auth = require('../moddleware/auth.moddleware')

router.get('/', auth, async (req, res) => {
    try {
        const events = await Event.find({owner: req.user.userId}, null, {})
        res.status(200).json(events)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

router.post('/', auth, async (req, res) => {
    try {
        const {name, min, max} = req.body
        const find = await Event.find({owner: req.user.userId, name})
        if (find) {
            return res.status(400).json({message: 'Вы уже подписаны'})
        }
        const newEvent = new Event({name, max, min, owner: req.user.userId})
        await newEvent.save()
        const events = await Event.find({owner: req.user.userId})
        res.status(200).json({events})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

router.delete('/', auth, async (req, res) => {
    try {
        const {_id} = req
        await Event.findByIdAndDelete(_id)
        const events = await Event.find({owner: req.user.userId})
        res.status(200).json({events})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

module.exports = router