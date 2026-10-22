import {z} from 'zod';
import {FIELDS, initialState} from './constants';
import {contactSchema} from './schema';
import type {ContactFormState, ContactValues} from './types';

const readValues = (formData: FormData) =>
    Object.fromEntries(
        FIELDS.map(({field}) => [field, String(formData.get(field) ?? '').trim()]),
    ) as ContactValues;

export const submitContactAction = (
    _prevState: ContactFormState,
    formData: FormData,
): ContactFormState => {
    const values = readValues(formData);
    const result = contactSchema.safeParse(values);

    return result.success
        ? {...initialState, status: 'success', contact: result.data}
        : {status: 'error', ...values, errors: z.flattenError(result.error).fieldErrors};
};
