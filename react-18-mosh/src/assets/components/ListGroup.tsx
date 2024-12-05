import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //event handler
  // const handleClick = (e: MouseEvent) => console.log(e);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 ? <p>No list items found</p> : null}
      <ul className="list-group">
        {items.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
