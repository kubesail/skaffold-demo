
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`App listening at http://localhost:${port} and ${process.env.HEY_LOOK_AN_ENVIRONMENT_VARIABLE}`)
})
