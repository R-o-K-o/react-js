import joi from "joi";

export const carValidator =  joi.object({
    // model: joi.string().min(2).max(20).required(),
    model: joi.string().regex(/^[a-zA-ZА-яіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'only letters min 1 character max 20 characters',
    }),
    price: joi.number().min(1).max(1000000).required(),
    year: joi.number().min(1990).max(new Date().getFullYear()).required(),
});