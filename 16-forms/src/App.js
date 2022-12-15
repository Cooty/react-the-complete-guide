import { useEffect } from "react";
import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";
import Tabs from "./components/ui/Tabs";
import useTabs from "./hooks/use-tabs";

function App() {
  const {
    shown: formToShow,
    setShown: setFormToShow,
    setFromUrl,
  } = useTabs("basic");

  useEffect(setFromUrl, [setFromUrl]);

  return (
    <div className="container">
      <Tabs>
        <Tabs.Item
          onClick={setFormToShow}
          target="simple"
          activeTab={formToShow}
        >
          Simple Input
        </Tabs.Item>
        <Tabs.Item
          onClick={setFormToShow}
          target="basic"
          activeTab={formToShow}
        >
          Basic form
        </Tabs.Item>
      </Tabs>
      <div className="app">
        {formToShow === "basic" ? <BasicForm /> : <SimpleInput />}
      </div>
    </div>
  );
}

export default App;
