import { useState } from "react";

const user = {
  name: "Lakshan Attanayake",
  imgUrl: "/lakshan-dp.jpg",
  imageSize: 90,
};

export default function Button() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    // alert("You clicked me!");
  }
  return (
    <div>
      <h1>Wellcome to My App</h1>
      <button onClick={handleClick}>Click {count} times!</button>
      <div className="profile-card">
        <h3>{user.name}</h3>
        <img className="dp" src={user.imgUrl} alt={user.name + "'s Image"} />
      </div>
    </div>
  );
}
