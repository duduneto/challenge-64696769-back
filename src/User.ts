// const _mongoose = require('mongoose');
const UserSchema = (_mongoose: any) => {
  const _UserSchema = new _mongoose.Schema({
    name: String,
    email: String,
  });
  return  _mongoose.model('User', _UserSchema)
}

module.exports = UserSchema;