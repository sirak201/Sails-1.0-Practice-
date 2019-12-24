/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    bookname : {
      type: 'string',
      required: true,
      unique: true
    },
    pageCount : {
      type: 'number',
      required: true,
    },
    Author : {
      model: 'User'
    }

  },

};

