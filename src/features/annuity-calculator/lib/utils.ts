import {initialState, MAX_MONTHS, MAX_RATE} from './constants';
import type {AnnuityResult, LoanAction, LoanField, LoanState} from './types';

const toDecimal = (value: string) =>
    value.match(/^\d*[.,]?\d{0,2}/)?.[0] ?? '';

const toInteger = (value: string) =>
    value.replace(/\D/g, '').replace(/^0+(?=\d)/, '');

const sanitizers: Record<LoanField, (value: string) => string> = {
    amount: toInteger,
    rate: toDecimal,
    term: toInteger,
};

export const loanReducer = (state: LoanState, action: LoanAction): LoanState =>
    action.type === 'reset'
        ? initialState
        : {...state, [action.field]: sanitizers[action.field](action.value)};

const round = (value: number) => Math.round(value * 100) / 100;

const parse = ({amount, rate, term}: LoanState) => {
    const values = {amount: Number(amount), rate: Number(rate.replace(',', '.')), term: Number(term)};

    const isValid =
        values.amount > 0 &&
        rate !== '' && Number.isFinite(values.rate) && values.rate <= MAX_RATE &&
        values.term > 0 && values.term <= MAX_MONTHS;

    return isValid ? values : null;
};

const monthlyPayment = (amount: number, annualRate: number, months: number) => {
    const monthlyRate = annualRate / 100 / 12;
    return monthlyRate === 0
        ? amount / months
        : amount * monthlyRate / (1 - (1 + monthlyRate) ** -months);
};

export const calculateAnnuity = (state: LoanState): AnnuityResult | null => {
    const loan = parse(state);
    if (!loan) {
        return null;
    }

    const payment = round(monthlyPayment(loan.amount, loan.rate, loan.term));
    const total = round(payment * loan.term);

    return {payment, total, overpayment: round(total - loan.amount)};
};
