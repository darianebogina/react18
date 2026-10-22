import type {z} from 'zod';
import type {contactSchema} from './schema';

export type ContactValues = z.infer<typeof contactSchema>;

export type ContactField = keyof ContactValues;

export type ContactErrors = Partial<Record<ContactField, string[]>>;

export type ContactFormState = ContactValues & (
    | {status: 'idle'}
    | {status: 'error'; errors: ContactErrors}
    | {status: 'success'; contact: ContactValues}
);

export type FieldConfig = {
    field: ContactField;
    label: string;
    placeholder: string;
    type: 'text' | 'tel';
};
