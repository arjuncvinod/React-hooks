import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function UseContext() {
  const [username, setUsername] = useState("");

  return (
    <div>
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
    </div>
  );
}

export default UseContext;
