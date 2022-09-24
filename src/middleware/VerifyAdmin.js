var jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {

    const email = req.decoded.email;
    // const user = await userCollection.findOne({ email })
    // // console.log('isAdmin',!user.isAdmin);

    // if (!user.isAdmin) {
    //   return res.status(403).send({ message: "Forbidden Access." })
    // }
    next();


}