const Joi = require("joi");

const studentSchema = Joi.object({
    id: Joi.string().required(), 

    name: Joi.string().min(3).required(),

    age: Joi.number().min(18).max(30).required(),

    course: Joi.string()
        .valid("FY MCA", "SY MCA", "FY MBA", "SY MBA")
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),

    phone: Joi.string().regex(/^[0-9]{10}$/).required(),

    city: Joi.string().empty('').default('Pune')
});

const validateStudent = (req, res, next) => {
    const { error } = studentSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }
    next();
};

module.exports = validateStudent;