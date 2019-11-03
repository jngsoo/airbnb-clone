const jwt = require('jsonwebtoken');
require('dotenv').config();
const TWO_HOURS = 1000*60*60*2;

module.exports = {
    issueNewToken(req, res) {
        const userInfo = req.user
        console.log(userInfo);
        const token = jwt.sign({
            userId: userInfo.user_id,
            userName: userInfo.name,
            type: userInfo.type
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn: '2h'
        });
        res.cookie('user_info', token, { expires: new Date(Date.now() + TWO_HOURS), httpOnly: false })
    },
    decodeUserToken(req) {
        req.cookies.user_info ? jwt.verify(req.cookies.user_info, process.env.JWT_SECRET_KEY) : null
    },
    decodeJwt(token) {
        return jwt.verify(token, process.env.JWT_SECRET_KEY);
    }
};