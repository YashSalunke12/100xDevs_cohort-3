const userAuthMiddleware = async (req, res, next) => {
  const token = req.body.authorization;
};

module.exports = userAuthMiddleware;
