var randomstring = require("randomstring");


exports.generateRandomString = () => {
    return randomstring.generate({
        length: 12,
        charset: 'alphabetic',
        capitalization:'uppercase'

      });
    }