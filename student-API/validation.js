const Joi = require("joi");
const studentSchema = Joi.object({

    //firstName: Joi.string().min(3).max(10).required(),
    //lastName: Joi.string().min(3).max(10).required(),
    //phone: Joi.number().integer().min(1000000000).max(9999999999).required(),
    //email: Joi.string().email({ minDomainSegments: 2 }).required(),
    //phone: Joi.string().regex(/^[0-9]{10}$/).required(),
    //email: Joi.string.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    //username: Joi.string().alphanum().min(3).max(30).required(),
    //year: Joi.number().integer().min(2000).max(new Date().getFullYear()),
    //password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,10}$')).required(),
    //status: Joi.string().valid("pending", "in-progress", "completed").required()
    //confirmPassword: Joi.ref('password')
    //country: Joi.string().default('USA')
    name: Joi.string().min(3).max(10).required(),
    age: Joi.number().integer().min(18).max(50).required(),
    course: Joi.string().valid("MCA", "MBA").required(),
    phone: Joi.string().regex(/^[0-9]{10}$/).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    city: Joi.string().empty(' ').default('Pune')

});

const validateStudent = (req, res, next) => {
    const { error } = studentSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = validateStudent;
