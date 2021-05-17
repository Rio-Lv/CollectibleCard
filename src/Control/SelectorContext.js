import React, { createContext, useState, useEffect } from "react";

const SelectorContext = createContext();

const SelectorProvider = (props) => {
  const [selected, setSelected] = useState("Login");
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <SelectorContext.Provider value={[selected, setSelected]}>
      {props.children}
    </SelectorContext.Provider>
  );
};

export { SelectorContext, SelectorProvider };
