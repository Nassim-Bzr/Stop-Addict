// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isUserInfoFilled, setIsUserInfoFilled] = useState(false);

  return (
    <AppContext.Provider value={{ isUserInfoFilled, setIsUserInfoFilled }}>
      {children}
    </AppContext.Provider>
  );
};
