import { Router } from 'express'
import path from 'path'
import keystone from 'keystone'

const Coder = keystone.list('Coder')

const router = Router()

router.get('/', (req, res, next) => {
  Coder.model.find((err, coders) => res.send(coders))
})

router.get('/skills', function (req, res, next) {
  Coder.model.distinct('skills', (err, skills) => err ? res.sendStatus(500) : res.send(skills))
})

router.get('/:id', function (req, res, next) {
  const id = req.params.id || ''
  if (id && id.length) {
    Coder.model.findOne({_id: id}, (err, coder) => res.send(coder))
  } else {
    res.sendStatus(404)
  }
})

router.get('/skills/avg', function (req, res) {
  Coder.model.aggregate([
    {
      $group: {
        _id: null,
        "techIntro": { $avg: '$tech.intro'}
      }
    }
  ], function (err, result) {
    res.send(err, result)
    console.log(err, result)
  });
})

export default router
