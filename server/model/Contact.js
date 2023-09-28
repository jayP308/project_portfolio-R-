const {Schema, model} = require('mongoose');

const ContactMe = new Schema ({ 
    name: String,
    email: {
        type: email,
        default: 'example@email.com'
    },
    message: String,
})

module.exports = model('Contact', ContactMe);
