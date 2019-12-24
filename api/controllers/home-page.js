module.exports = {


  friendlyName: 'Homepage',

  inputs: {
    email: {
      description: 'The ID of the user to look up.',
      type: 'string',
      required: true
    }, 

    user_name: {
      description: 'Users username',
      type: 'string',
      required: true
    }

  },


  description: '',





  exits: {

  },


  fn: async function (inputs) {

    
try {
  await User.create({emailAddress:inputs.email , password: "123456" , fullName : inputs.user_name})
  var usersNamedFinn = await User.find();

  return usersNamedFinn;
} catch (error) {
  console.log('Here is the error' + error)
  
}
  

     
  
  }


};
