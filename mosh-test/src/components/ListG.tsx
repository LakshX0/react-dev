import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelect: (item: string) => void;
}

function ListG({ items, heading, onSelect }: Props) {
  const [selectedItem, setselectedItem] = useState(-1);

  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 && "no items found!"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setselectedItem(index);
              onSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListG;
