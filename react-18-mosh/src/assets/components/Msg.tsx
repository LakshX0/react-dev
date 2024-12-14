let count = 0;
const Msg = () => {
  count++;
  console.log("click", count);

  return <div>Msg {count}</div>;
};

export default Msg;
