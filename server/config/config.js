const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET: 'S7HpZ5FcrW2mK',
    DATABASE: 'mongodb://localhost:27017/djsfunzone',
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
