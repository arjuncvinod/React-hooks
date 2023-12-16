import React, { useContext } from "react";
import { AppContext } from "./UseContext";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <section>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </section>
  );
}

export default Login;
