import { useLayoutEffect, useEffect, useState } from "react";

function UseLayoutEffect() {
  const [data, setData] = useState("");

  useEffect(() => {
    setData("UseEffect");//execute after useLayoutEffect
  }, []);


useLayoutEffect(() => {
    setData("UseLayoutEffect");//execute first
  }, []);

  
  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default UseLayoutEffect;
