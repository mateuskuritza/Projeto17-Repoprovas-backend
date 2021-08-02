import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    periodId: Joi.number().min(1).max(11).required(),
    courseId: Joi.number().min(1).required()
})

export default schema;