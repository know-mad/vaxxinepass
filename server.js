const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World')
})

// Initialize the server

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, console.log(`Server started on port ${PORT}`))
process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})