import {useSyncExternalStore} from 'react';
import {THEME_STORAGE_KEY} from '@/shared/config';
import type {Theme} from '../types';

const listeners = new Set<() => void>();

const subscribe = (onChange: () => void) => {
    listeners.add(onChange);
    window.addEventListener('storage', onChange);

    return () => {
        listeners.delete(onChange);
        window.removeEventListener('storage', onChange);
    };
};

const getSnapshot = () =>
    localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';

export const setTheme = (theme: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    listeners.forEach((listener) => listener());
};

export const useTheme = () => useSyncExternalStore(subscribe, getSnapshot);
