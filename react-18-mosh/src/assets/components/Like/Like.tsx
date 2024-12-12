import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useState } from "react";

const Like = () => {
  const [clickedLike, setClickedLike] = useState(false);

  const handleLikeClicked = () => {
    setClickedLike(!clickedLike);
  };

  return (
    <>
      {clickedLike ? (
        <IoIosHeart
          size={40}
          onClick={handleLikeClicked}
          style={{
            color: "red", // Change to red when clicked
            cursor: "pointer",
          }}
        />
      ) : (
        <IoIosHeartEmpty
          size={40}
          onClick={handleLikeClicked}
          style={{
            color: "grey", // Change to grey when not clicked
            cursor: "pointer",
          }}
        />
      )}
    </>
  );
};

export default Like;
