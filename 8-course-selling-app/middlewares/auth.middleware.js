const jwt = require("jsonwebtoken");

const auth = (JWT_SECRET) => {
  return async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.json({ msg: "invalid token1" });
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.id) {
      req.id = decoded.id;
      return next();
    }
    res.json({ msg: "invalid token2" });
  };
};

module.exports = auth;
