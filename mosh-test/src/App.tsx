import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListG from "./components/ListG";

function App() {
  const [alertVisisble, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisisble && (
        <Alert onClose={() => setAlertVisible(false)}>
          A simple info alert—check <span>it</span> out!
        </Alert>
      )}
      <Button btnColor="primary" onClick={() => setAlertVisible(true)}>
        <span role="img" aria-label="star">
          ⭐
        </span>{" "}
        Click me
      </Button>{" "}
      <br /> <br />
      <ListG
        items={["Item 1", "Item 2", "Item 3"]}
        heading="List of Items"
        onSelect={(item) => console.log(item)}
      />
    </>
  );
}

export default App;
