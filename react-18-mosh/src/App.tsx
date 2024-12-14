import { useState } from "react";
import Alert from "./Alert";
import ListGroup from "./assets/components/ListGroup";
import Button from "./Button";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Like from "./assets/components/Like";
import Msg from "./assets/components/Msg";
import Beverage from "./assets/components/Beverage";
import Customer from "./assets/components/Customer";

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
      <br />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Your activity is saved!
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        Lakshan
      </Button>
      <br /> <br />
      <BsFillCalendarDateFill size={"50px"} color="green" />
      <br />
      <br />
      <Like />
      <br />
      <br />
      <Msg />
      <br />
      <Beverage />
      <br />
      <Customer />
    </div>
  );
}

export default App;
