import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [product , setProduct] = useState(null);

  const setToOpenModal = (e,product) => {
    e.preventDefault();
    setIsOpen(true);
    setProduct(product);
    document.body.classList.add("overflow-hidden");
    
  };

  const setToCloseModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setProduct(null);
    document.body.classList.remove("overflow-hidden");
    
  };

  return (
    <MyContext.Provider value={{ isOpen, product, setToOpenModal, setToCloseModal }}>
      {children}
    </MyContext.Provider>
  );
};
