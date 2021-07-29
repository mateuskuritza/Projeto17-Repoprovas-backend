import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().pattern(new RegExp(/2[0-9]{3}.[1-2]/gm)).required(),
    categoryId: Joi.number().min(1).required(),
    teacherId: Joi.number().min(1).required(),
    subjectId: Joi.number().min(1).required(),
    courseId: Joi.number().min(1).required(),
    pdf: Joi.string().min(3).required()
})

export default schema;