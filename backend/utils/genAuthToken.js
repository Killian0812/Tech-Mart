const jwt = require('jsonwebtoken')

const genAuthToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY

  const token = jwt.sign({
    _id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  },
  secretKey
  );

  return token;
};

module.exports = genAuthToken;