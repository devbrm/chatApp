import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import WelcomePage from "./components/WelcomePage";
export const AppContext = React.createContext();

function App() {
  const [userName, setUserName] = useState("");

  if (!userName)
    return (
      <AppContext.Provider value={{ userName, setUserName }}>
        <WelcomePage />
      </AppContext.Provider>
    );

  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <Chat />
      </AppContext.Provider>
    </div>
  );
}

export default App;
