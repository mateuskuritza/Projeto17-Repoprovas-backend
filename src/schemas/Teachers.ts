import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    courseId: Joi.number().required()
})

export default schema;