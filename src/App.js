import React from "react";

import { SelectorProvider } from "./Control/SelectorContext";
import Main from "./components/Main";

function App() {
  return (
    <SelectorProvider>
      <div>
        <Main></Main>
      </div>
    </SelectorProvider>
  );
}

export default App;
