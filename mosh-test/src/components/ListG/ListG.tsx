import { useState } from "react";
import "./ListG.css";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  padding: 10px 0;
`;

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
      <Ul>
        {items.map((item, index) => (
          <Li
            key={item}
            onClick={() => {
              setselectedItem(index);
              onSelect(item);
            }}
          >
            {item}
          </Li>
        ))}
      </Ul>
    </>
  );
}
export default ListG;
