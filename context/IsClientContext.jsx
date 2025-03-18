// context/ClientContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

// Crear el contexto
const ClientContext = createContext();

// Componente proveedor del contexto
export const ClientProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  return (
    <ClientContext.Provider value={{ isClient }}>
      {children}
    </ClientContext.Provider>
  );
};

// Hook para consumir el contexto
export const useClient = () => {
  return useContext(ClientContext);
};
