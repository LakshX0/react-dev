// import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button btnColor="primary">
        <span role="img" aria-label="star">
          ⭐
        </span>{" "}
        Click me
      </Button>
      {/* <Alert>
        A simple info alert—check <span>it</span> out!
      </Alert> */}
    </>
  );
}

export default App;
