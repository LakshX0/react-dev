import { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "Lakshan",
    address: {
      city: "Ratnapura",
      zipCode: 70000,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 65000 },
    });
  };

  return (
    <div>
      <h3>Customer Detail</h3>
      {customer.name} <br />
      {customer.address.zipCode} <br />
      <button onClick={handleClick}>check new address</button>
    </div>
  );
};

export default Customer;
