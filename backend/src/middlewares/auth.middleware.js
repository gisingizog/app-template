const { verify } = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

const auth = async (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header ? header.split(" ")[1] : req.query.token;
  console.log("token", token);

  if (!token) {
    return res.status(401).send({
      Message: "NOT_AUTHORIZED",
    });
  }
  try {
    const decoded = verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded)
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).send({
        Message: "INVALID_TOKEN",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(501).send(err);
    return;
  }
};

module.exports = auth;
