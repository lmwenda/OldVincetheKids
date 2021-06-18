const Joi = require('@hapi/joi');

function ValidateUser(body){
    const schema = Joi.object({
        email: Joi.string().min(4).email(),
        username: Joi.string().min(3).required(),
        password: Joi.string().min(6).required(),
  });
  return schema.validate(body);
}
  
module.exports.ValidateUser = ValidateUser;