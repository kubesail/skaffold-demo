
const express = require('express')
const app = express()
const { HEY_LOOK_AN_ENVIRONMENT_VARIABLE } = process.env

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`App listening!`, { HEY_LOOK_AN_ENVIRONMENT_VARIABLE })
})
