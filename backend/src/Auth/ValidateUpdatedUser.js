const Joi = require("@hapi/joi");

function ValidateUpdatedUser(body){
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        password: Joi.string().min(6).required(),
  });
  return schema.validate(body);
}

module.exports.ValidateUpdatedUser = ValidateUpdatedUser;