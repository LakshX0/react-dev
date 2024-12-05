function ListGroup() {
  const cities = [
    "Ratnapura",
    "Colombo",
    "Kandy",
    "Trincomalee",
    "Nuwara Eliya",
    "Gampaha",
  ];

  return (
    <>
      <h2>Major Cities</h2>
      {cities.length === 0 ? <p>No list items found</p> : null}
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
