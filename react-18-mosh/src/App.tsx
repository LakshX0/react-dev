import { useState } from "react";
import Alert from "./Alert";
import ListGroup from "./assets/components/ListGroup";
import Button from "./Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const cities = [
    "Ratnapura",
    "Colombo",
    "Kandy",
    "Trincomalee",
    "Nuwara Eliya",
    "Gampaha",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities of Sri Lanka"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Your activity is saved!
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        Lakshan
      </Button>
    </div>
  );
}

export default App;
