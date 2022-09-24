var jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {

    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ message: "Unauthorized access." })
    }
    const authToken = authorization.split(' ')[1]
    jwt.verify(authToken, process.env.JWT_ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: "Forbidden Access" });
        }
        req.decoded = decoded;
        next();
    })
    // next();


}