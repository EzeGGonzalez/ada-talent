import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import mongoose from 'mongoose'
import nconf from 'nconf'
import path from 'path'
import body from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'

nconf.env().file({ file: `${__dirname}/config/config.json` })

nconf.defaults({
  'HOST': '127.0.0.1',
  'PORT': 3000,
  'ROOT_FOLDER': '/',
  'database': {
    'url': 'mongodb://localhost/ada-talent'
  },
  'cloudinary': {
    key: '',
    secret: '',
    name: ''
  },
  'cookieSecret': 'cookieSecret'
})

const loadConf = () => {
  return new Promise((resolve, reject) => {
    nconf.load(() => resolve(''))
  })
}

(async () => await loadConf())()

const app = express()
const host = nconf.get('HOST')
const port = nconf.get('PORT')

app.set('port', port)

app.use(body.urlencoded({ extended: true }))
app.use(body.json())

var cookieSecret = nconf.get('cookieSecret')

app.use(cookieParser(cookieSecret))

var keystone = require('keystone')

app.use(session({
  secret: cookieSecret
}))

keystone.init({
  'name': 'Ada Talent App',
  'brand': 'Ada',
  'session': false,
  'updates': '../server/updates',
  'auth': true,
  'user model': 'User',
  'auto update': true,
  'cookie secret': cookieSecret,
  'mongo': nconf.get('database:url')
})

keystone.set('cloudinary config', `cloudinary://${nconf.get('cloudinary.key')}:${nconf.get('cloudinary.secret')}@${nconf.get('cloudinary.name')}`)

keystone.import('../server/models')

app.use('/api/image', express.static('uploads'))

// Import API Routes
app.use('/api', require('./api').default)

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

keystone.set('app', app)

app.use('/keystone', require('keystone/admin/server/app/createStaticRouter.js')(keystone))
app.use('/keystone', require('keystone/admin/server/app/createDynamicRouter.js')(keystone))

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
keystone.start()
