const Joi = require("joi");

const bookSchema = Joi.object({
    id: Joi.string().required(),

    title: Joi.string().min(4).max(20).required(),

    author: Joi.string().min(4).max(15).required(),

    price: Joi.number().required(),

    publishedyear: Joi.number()
        .min(2000)
        .max(2026)
        .required()
});

const validateBook = (req, res, next) => {
    const { error } = bookSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }
    next();
};

module.exports = validateBook;