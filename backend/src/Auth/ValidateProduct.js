const Joi = require('@hapi/joi');

function ValidateProduct(body){
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(4).required(),
        image: Joi.required(),
        price: Joi.number.required(),
        countInStock: Joi.required()
  });
  return schema.validate(body);
}
  
module.exports.ValidateProduct = ValidateProduct;