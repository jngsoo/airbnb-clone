const jwt = require('jsonwebtoken');
const secret = require('../secret');

module.exports = {
    issueNewToken(req, res) {
        const userInfo = req.user
        const token = jwt.sign({
            userId: userInfo.user_id,
            userName: userInfo.name,
            type: userInfo.type
            },
            secret.secretKey,
            {expiresIn: '2h'
        });
    res.cookie('user_info', token)
    },
    decodeUserToken(req) {
        return jwt.verify(req.cookies.user_info, secret.secretKey)
    }
}