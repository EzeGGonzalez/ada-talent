const gm = require('gm')

export default (opts) => {
  opts = {
    width: 180,
    height: 180,
    quality: 90,
    ...opts
  }

  let gmAction = gm(opts.src)
    .resize(opts.width, opts.height, '^')
    .gravity("Center")
    .crop(opts.width, opts.height)
    .quality(opts.quality)
    .noProfile()

  return new Promise(function (resolve, reject) {
    try {
      gmAction.write(opts.thumbnail, err => err ? reject(err) : resolve(opts.thumbnail))
    } catch (err) {
      reject(err)
    }
  })
}
