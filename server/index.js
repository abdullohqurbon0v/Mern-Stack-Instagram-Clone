require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
      console.log(`Server has been started on PORT: http://localhost:${PORT}`)
})