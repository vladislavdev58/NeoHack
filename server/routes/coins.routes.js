const {Router} = require('express')
const Coin = require('../models/Coin')
const auth = require('../moddleware/auth.moddleware')

const router = Router()

router.get('/', auth, async (req, res) => {
    try {
        const coins = await Coin.find({}, null, {})
        res.status(200).json(coins)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})



module.exports = router