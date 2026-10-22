import type {ContactFormState, FieldConfig} from './types';

export const FIELDS: FieldConfig[] = [
    {field: 'lastName', label: 'Фамилия', placeholder: 'Иванов', type: 'text'},
    {field: 'firstName', label: 'Имя', placeholder: 'Иван', type: 'text'},
    {field: 'phone', label: 'Номер телефона', placeholder: '+7 999 123-45-67', type: 'tel'},
];

export const initialState: ContactFormState = {
    status: 'idle',
    lastName: '',
    firstName: '',
    phone: '',
};
