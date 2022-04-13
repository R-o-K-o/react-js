import joi from "joi";

export const carValidator = joi.object({
    model:joi.string().min(1).max(20).required(),
    price:joi.number().min(0).max(1000000).required(),
    year:joi.number().min(1990).max(new Date().getFullYear()).required()
});
