const auth = require('../moddleware/auth.moddleware')
const Event = require('../models/Event')
const {Router} = require('express')
const router = Router()
const dataChart = require('../json/stockData.json')

router.get('/', auth, async (req, res) => {
    try {
        const events = await Event.find({owner: req.user.userId}, null, {})
        const result = events.map(event => ({name: event.name, dataChart }))
        console.log(result)
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

module.exports = router