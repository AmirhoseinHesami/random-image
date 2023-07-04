import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [reload, setReload] = useState(true);

  const contextValue = {
    selectedCategory,
    setSelectedCategory,
    reload,
    setReload,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
