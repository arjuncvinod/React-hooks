import UseEffect from "./useEffect/UseEffect"
import UseReducer from "./UseReducer/UseReducer";
import UseRef from "./useRef/UseRef"
import UseState from "./UseState/UseState";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";
import UseImperativeHandle from "./useImperativeHandle/UseImperativeHandle";
function App() {
  return (
    <div>
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativeHandle />
    </div>
  );
}

export default App;
