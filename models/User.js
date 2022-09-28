const { Schema, model } = require('mongoose');
// const validateEmail = require('../utils/validateEmail')

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [],
    friends: []
})

UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

  const User = model('User', UserSchema);

  module.exports = User;