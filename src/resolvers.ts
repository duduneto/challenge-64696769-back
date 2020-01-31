const UserSchma = require('./User');

const User = UserSchma(require('mongoose'))


module.exports = {
  Query: {
    users: () => User.find().sort({createdAt: -1}),
    user: (context: any, request: any) => {
      // return users.find(user => Number(user.id) === Number(request.id))
      return User.findById(request.id)
    },
    userByField: async (context: any, request: any) => {
      let field = request.field
      let respDb = await User.findOne({[request.field]: { "$regex": request.value, "$options": "i" }});
      console.log(respDb);
      return respDb;
    }
  },

  Mutation: {
    createUser: async (context: any, request: any) => {
      console.log('REQUESTI INFO ===>', request);
      let respDB = await User.create({createdAt: new Date(),user_name: request.user_name, user_cep: request.user_cep, user_add_street: request.user_add_street, user_add_number: request.user_add_number, user_add_bairro: request.user_add_bairro, user_city: request.user_city, user_uf: request.user_uf})
      console.log(respDB);
      return respDB
    },
  }
}