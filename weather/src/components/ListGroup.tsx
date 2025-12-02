import { Fragment } from "react";

function ListGroup() {
  const items = ["Malmö", "Lund", "Staffanstorp", "Bulltofta", "USA"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
