import "./App.css";
import Button from "./Button";
import Counterbtn from "./Counterbtn";
import Item from "./Item";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    <>
      <Button />
      <ShoppingList />
      <Item /> <br />
      <h1>Counters that update seperately</h1>
      <Counterbtn /> <br />
      <Counterbtn />
    </>
  );
}

export default App;
