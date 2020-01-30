const UserSchma = require('./User');

const User = UserSchma(require('mongoose'))


module.exports = {
  Query: {
    users: () => User.find(),
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
      let respDB = await User.create({name: request.name, email: request.email})
      console.log(respDB);
      return respDB
    },
  }
}