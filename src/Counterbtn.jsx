import { useState } from "react";

export default function Counterbtn() {
  const [count, setCount] = useState(0);

  function clickBtn() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={clickBtn}>Clicked {count} times</button>
    </>
  );
}
