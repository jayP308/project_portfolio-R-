const {Schema, model} = require('mongoose');

const ContactMe = new Schema ({ 
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },
    message: String,
})

module.exports = model('Contact', ContactMe);
