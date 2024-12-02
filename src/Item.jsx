const goods = [
  { id: 1, title: "Peach", isFruit: true },
  { id: 2, title: "Cabbage", isFruit: false },
  { id: 3, title: "Carrot", isFruit: false },
  { id: 4, title: "Onion", isFruit: false },
  { id: 5, title: "Pineapple", isFruit: true },
];

export default function Item() {
  const boughtGoods = goods.map((stuff) => (
    <li key={stuff.id} style={{ color: stuff.isFruit ? "Green" : "Red" }}>
      {stuff.title}
    </li>
  ));
  return <ul>{boughtGoods}</ul>;
}
