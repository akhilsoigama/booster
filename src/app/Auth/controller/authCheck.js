const jwt = require('jsonwebtoken');

const authCheck = async (req, res) => {
    const token = req.cookies.token;
    if (token) {
        try {
            jwt.verify(token, 'your-secret-key');
            res.json({ isLoggedIn: true });
        } catch (error) {
            res.json({ isLoggedIn: false });
        }
    } else {
        res.json({ isLoggedIn: false });
    }
};
module.exports = authCheck