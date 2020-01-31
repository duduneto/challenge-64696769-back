// const _mongoose = require('mongoose');
const UserSchema = (_mongoose: any) => {
  const _UserSchema = new _mongoose.Schema({
    createdAt: Date,
    user_name: String,
    user_cep: String,
    user_add_street: String,
    user_add_number: String,
    user_add_bairro: String,
    user_city: String,
    user_uf: String,
  });
  return  _mongoose.model('User', _UserSchema)
}

module.exports = UserSchema;