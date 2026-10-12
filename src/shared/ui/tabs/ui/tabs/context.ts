import { createContext, useContext } from 'react';

const TabActiveContext = createContext(true);

export const TabActiveProvider = TabActiveContext.Provider;

export const useIsTabActive = () => useContext(TabActiveContext);
