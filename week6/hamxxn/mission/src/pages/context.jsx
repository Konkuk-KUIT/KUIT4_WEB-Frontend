import { createContext, useContext } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children, value }) => {
  const store = value || {};

  return (
    <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>
  );
};
export const GetStoreContext = () => useContext(StoreContext);
