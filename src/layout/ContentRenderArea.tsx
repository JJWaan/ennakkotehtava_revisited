import { useContext } from "react";
import { ProductContext } from "../App";

import Index from "../pages";
import Shop from "../pages/shop";

function ContentRenderArea() {
  const context = useContext(ProductContext);

  return <main>{!context.validCustomerNumber ? <Index /> : <Shop />}</main>;
}

export default ContentRenderArea;
