import MyCustomHook from "./Components/MyCustomHook";
import MyUseEffect from "./Components/MyUseEffect";
import MyUseState from "./Components/MyUseState";

function App() {
  return (
    <div>
      <MyUseState></MyUseState>
      <br/>
      <br/>
      <MyUseEffect></MyUseEffect>
      <br/>
      <br/>
      <MyCustomHook></MyCustomHook>
    </div>
  );
}

export default App;
