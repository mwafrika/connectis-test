const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authorize = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(401).send({ status: 'error', error: 'Connectez-vous svp' });
  const decoded = jwt.verify(token, process.env.UserToken);
  req.user = decoded;
  return next();
};

module.exports = authorize;
