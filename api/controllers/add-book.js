module.exports = {


  friendlyName: 'Add book',


  description: '',


  inputs: {
    bookname : {
      type: 'string',
      required: true,
    },
    pageCount : {
      type: 'number',
      required: true,
    },
    authorId : {
      type: 'string',
      required: true,
    }
  },


  exits: {

  },


  fn: async function (inputs) {
try {
  const author = await User.findOne({id:inputs.authorId})
  const newBook = await Book.create({bookname:inputs.bookname , pageCount:  inputs.pageCount , Author : author.id}).fetch();
  var bookCreated = await Book.find({bookname:newBook.bookname}).populate('Author');

  return bookCreated;
  } catch(error) {
    return error
  }
  
   

  }


};
