import { useContext } from "react";

import { ProductContext } from "../App";

import Products from "../components/Products";
import Order from "../components/Order";

function Shop() {
  const { isOrdered } = useContext(ProductContext);

  return isOrdered ? <Order /> : <Products />;
}

export default Shop;
