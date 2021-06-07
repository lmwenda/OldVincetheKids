const Joi = require("@hapi/joi");

function ValidateUpdatedUser(body){
    const schema = Joi.object({
        email: Joi.string().min(4).required().email(),
        username: Joi.string().min(3).required(),
        password: Joi.string().min(6).required(),
  });
  return schema.validate(body);
}

module.exports = ValidateUpdatedUser;