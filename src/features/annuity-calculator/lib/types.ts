export type LoanState = {
    amount: string;
    rate: string;
    term: string;
};

export type LoanField = keyof LoanState;

export type LoanAction =
    | {type: 'change'; field: LoanField; value: string}
    | {type: 'reset'};

export type AnnuityResult = {
    payment: number;
    total: number;
    overpayment: number;
};

export type FieldConfig = {
    field: LoanField;
    label: string;
    placeholder: string;
};

export type SummaryConfig = {
    key: keyof AnnuityResult;
    label: string;
};
