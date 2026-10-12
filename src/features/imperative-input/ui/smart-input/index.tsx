import {useImperativeHandle, useRef, useState} from 'react';
import type {Ref} from 'react';
import {Input} from '@/shared/ui';
import type {SmartInputHandle} from '../../lib';

type SmartInputProps = {
    ref?: Ref<SmartInputHandle>;
};

export const SmartInput = ({ref}: SmartInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        clear: () => {
            setValue('');
            inputRef.current?.focus();
        },
    }), []);

    return (
        <Input
            ref={inputRef}
            value={value}
            onChange={setValue}
            placeholder="Введите текст..."
        />
    );
};
