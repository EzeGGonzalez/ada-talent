import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import mongoose from 'mongoose'
import nconf from 'nconf'
import path from 'path'

import api from './api'

nconf.env().file({ file: `${path.join('.', 'config', 'config.json')}` })

nconf.defaults({
  'HOST': '127.0.0.1',
  'PORT': 3000,
  'database': {
    'url': 'mongodb://localhost/ada-talent'
  }
})

const app = express()
const host = nconf.get('HOST')
const port = nconf.get('PORT')

app.set('port', port)

app.use('/api/image', express.static('uploads'))

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
mongoose.connect(nconf.get('database:url'), function(err, res) {
  if(err) {
    console.log(`Error: ${err}`)
  } else {
    app.listen(port, host)
  }
})
