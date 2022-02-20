const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/coins', require('./routes/coins.routes'))
app.use('/api/events', require('./routes/events.routes'))
app.use('/api/candles', require('./routes/candles.routes'))

const PORT = config.get('port')
const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Hacking start on port ${PORT}...`))
    } catch (e) {
        console.error('Server error', e.message)
        process.exit(1)
    }
}


start()