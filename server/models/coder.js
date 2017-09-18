var keystone = require('keystone')
var Types = keystone.Field.Types

var Coder = new keystone.List('Coder')

Coder.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
  pic: { type: Types.CloudinaryImage, required: true, initial: true },
  skills: { type: Types.TextArray, required: true, default: '' },
  bio: { type: Types.Textarea, required: true, default: '' }
})

Coder.defaultColumns = 'name, email'

Coder.register()
