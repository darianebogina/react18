import {z} from 'zod';

const NAME_PATTERN = /^[\p{L}-]{2,}$/u;
const PHONE_PATTERN = /^\+?(?:\d[\s()-]*){9,14}\d$/;

const nameSchema = z.string().trim().regex(NAME_PATTERN, 'Минимум 2 буквы, допускается дефис');

export const contactSchema = z.object({
    lastName: nameSchema,
    firstName: nameSchema,
    phone: z.string().trim().regex(PHONE_PATTERN, 'От 10 до 15 цифр, можно с + в начале'),
});
