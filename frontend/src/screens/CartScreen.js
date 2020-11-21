import React, {
  useEffect
} from "react";
import {
  useDispatch
} from "react-redux";
import {
  addToCart
} from "../actions/cartActions";

export default function CartScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const qty = props.location.search ?
    Number(props.location.search.split("=")[1]) :
    1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return ( <
    div >
    <
    h1 > Cart screen < /h1> <
    p >
    Add Too Cart: ProductID: {
      productId
    }
    qty: {
      qty
    } <
    /p> <
    /div>
  );
}