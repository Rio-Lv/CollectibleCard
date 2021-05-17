import React from "react";
import "./app.css"
import { SelectorProvider } from "./Control/SelectorContext";
import Main from "./components/Main"

function App() {
  return (
    <SelectorProvider>
      <div className="App">
        <Main></Main>
      </div>
    </SelectorProvider>
  );
}

export default App;
