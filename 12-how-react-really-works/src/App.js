import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import { DemoOutput } from "./components/Demo/";

import "./App.css";

function App() {
  const [isTogglingAllowed, setIsTogglingAllowed] = useState(false);
  const [isParagraphShown, setIsParagraphShown] = useState(false);
  const toggle = useCallback(() => {
    if (isTogglingAllowed) {
      setIsParagraphShown((oldValue) => {
        return !oldValue;
      });
    }
  }, [isTogglingAllowed]);

  const enableToggle = () => setIsTogglingAllowed(true);

  console.log("App is running");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button type="button" onClick={enableToggle}>
        Enable toggling
      </Button>
      <Button type="button" onClick={toggle}>
        Toggle paragraph!
      </Button>

      <DemoOutput show={isParagraphShown}>This is new!</DemoOutput>
    </div>
  );
}

export default App;
