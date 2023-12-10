import UseEffect from "./Hooks/UseEffect";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
function App() {
  return (
    <div>
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
    </div>
  );
}

export default App;
