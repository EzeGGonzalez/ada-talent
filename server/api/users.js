import { Router } from 'express'
import mongoose from 'mongoose'
import path from 'path'

import Model from '../models/coder'

import avatarUploader from '../uploaders/avatar'

const Coder = mongoose.model('coders')
const router = Router()

router.get('/users', function (req, res, next) {
  Coder.find((err, coders) => res.send(coders))
})

router.get('/users/:id', function (req, res, next) {
  const id = req.params.id || ''
  if (id && id.length) {
    Coder.findOne({_id: id}, (err, coder) => res.send(coder))
  } else {
    res.sendStatus(404)
  }
})

router.post('/users/new', avatarUploader.single('photo'), function (req, res, next) {
  let coder = new Coder({
    photo: {
      original: req.file.filename,
      thumbnail: req.file.thumbnail
    },
    ...req.body
  })

  coder.save(err => err ? res.sendStatus(500).send(err) : res.send(coder))
})

export default router
