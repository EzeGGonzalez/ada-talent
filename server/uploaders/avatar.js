import multer from 'multer'
import crypto from 'crypto'
import path from 'path'

import thumbnailize from '../helpers/thumbnailize'

const DEST = `${path.resolve('uploads')}/`

function AvatarStorage (opts) {
  this._storage = multer.diskStorage({
    destination: DEST,
    filename: function (req, file, callback) {
      crypto.pseudoRandomBytes(16, function(err, raw) {
        if (err) return callback(err)
        callback(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}

AvatarStorage.prototype._handleFile = function _handleFile (req, file, cb) {
  this._storage._handleFile(req, file, (err, res) => {
    if (err) return cb(err)

    thumbnailize({
      src: res.path,
      thumbnail: path.join(res.destination, `thumb_${res.filename}`)
    })
    .then((thumbnail) => cb(null, { ...res, thumbnail: `thumb_${res.filename}` }))
  })
}

AvatarStorage.prototype._removeFile = function _removeFile (req, file, cb) {
  this._storage._removeFile(req, file, cb)
}

export default multer({ storage: new AvatarStorage() })
