import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The "name" field is mandatory.']
  },
  email: {
    type: String,
    required: [true, 'The "email" field is mandatory.']
  },
  password: {
    type: String,
    required: [true, 'The "password" field is mandatory.']
  }
})

export default mongoose.models.users || mongoose.model('users', schema)
