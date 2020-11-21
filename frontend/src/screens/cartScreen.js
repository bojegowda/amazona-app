import React from "react";

export default function cartScreen(props) {
  const productid = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  return (
    <div>
      <h1>Cart screen</h1>
      <p>
        Add ToO Cart: ProductID:{productid} qty:{qty}
      </p>
    </div>
  );
}
