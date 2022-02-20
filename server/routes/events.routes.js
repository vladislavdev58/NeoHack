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
        const newEvent = new Event({name, max, min})
        await newEvent.save()
        res.status(200).json({message: `Событие ${name} - сохранено`})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

module.exports = router