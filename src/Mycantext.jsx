// MyContext.js
import React, { createContext, useState } from "react";

export const  Context = createContext();

export const MyProvider = ({ children }) => {

 
const [user, setUser] =useState([{
    id: 1,
    name: "Murod",
    like: "Lorem ipsum dolor sit amet.",
    commit: 2,
  },
  {
    id: 2,
    name: "Asadbek",
    like: "Lorem ipsum dolor sit amet.",
    commit: 2,
  },
  {
    id: 3,
    name: "Zikrillox",
    like: "Lorem ipsum dolor sit amet.",
    commit: 2,
  },
  {
    id: 4,
    name: "EShon",
    like: "Lorem ipsum dolor sit amet.",
    commit: 2,
  },])

  return (
    <Context.Provider value={{ user, setUser}}>
      {children}
    </Context.Provider>
  );
};