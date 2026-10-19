import type {FieldConfig, LoanState, SummaryConfig} from './types';

export const MAX_RATE = 100;
export const MAX_MONTHS = 600;

export const FIELDS: FieldConfig[] = [
    {field: 'amount', label: 'Сумма кредита, ₽', placeholder: '3000000'},
    {field: 'rate', label: 'Ставка, % годовых', placeholder: '12'},
    {field: 'term', label: 'Срок, мес.', placeholder: '240'},
];

export const SUMMARY: SummaryConfig[] = [
    {key: 'payment', label: 'Ежемесячный платёж'},
    {key: 'total', label: 'Общая сумма выплат'},
    {key: 'overpayment', label: 'Переплата'},
];

export const money = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'});

export const initialState: LoanState = {
    amount: '3000000',
    rate: '13',
    term: '240',
};
