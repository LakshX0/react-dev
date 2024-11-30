const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Carrot", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const itemList = products.map((product) => (
    <li key={products.id} style={{ color: product.isFruit ? "Red" : "Green" }}>
      {product.title}
    </li>
  ));

  return <ul>{itemList}</ul>;
}
