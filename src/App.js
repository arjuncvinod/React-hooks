import UseEffect from "./useEffect/UseEffect"
import UseReducer from "./useReducer/UseReducer";
import UseRef from "./useRef/UseRef"
import UseState from "./useState/UseState";
import UseLayoutEffect from "./useLayoutEffect/UseLayoutEffect";
import UseImperativeHandle from "./useImperativeHandle/UseImperativeHandle";
import UseContext from "./useContext/UseContext";
function App() {
  return (
    <div>
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativeHandle />
      <UseContext />
    </div>
  );
}

export default App;
