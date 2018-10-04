const crypto = require('crypto');

module.exports = {
    pass: function(password) {
        const salt = crypto.randomBytes(128).toString('base64');
        const hash = crypto.pbkdf2Sync(password, salt, 10000, 512,'sha256');
        return hash;
    }
}