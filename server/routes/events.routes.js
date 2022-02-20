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
        const {name, min, max, parent} = req.body
        console.log(req.body)
        const find = await Event.find({owner: req.user.userId, name})
        if (find.length) {
            return res.status(400).json({message: 'Вы уже подписаны'})
        }
        const newEvent = new Event({name, max, min, owner: req.user.userId, parent})
        await newEvent.save()
        const events = await Event.find({owner: req.user.userId})
        res.status(200).json({events})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

router.delete('/:id', auth, async (req, res) => {
    try {
        const id = req.params.id
        await Event.findOneAndRemove({parent: id, owner: req.user.userId})
        const events = await Event.find({owner: req.user.userId})
        res.status(200).json({events})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

module.exports = router