import { useEffect } from "react";
import "./App.css";
import { connectWithWebSocket } from "./utils/wssConnection/wssConnection";

function App() {
  useEffect(() => {
    connectWithWebSocket()
  }, []);

  return <div className="App">hello react is here!</div>;
}

export default App;
