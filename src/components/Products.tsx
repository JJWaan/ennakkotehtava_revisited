import { useQuery } from "@tanstack/react-query";

import getProducts from "../utility/getProducts";

import ProductsLoadingScreen from "./ProductsLoadingScreen";
import ProductsErrorComponent from "./ProductsError";
import ProductsList from "./ProductsList";

function Products() {
  const { data, status } = useQuery({
    queryKey: ["bakeryproducts"],
    queryFn: async () => getProducts(),
  });

  if (status === "loading") {
    return <ProductsLoadingScreen />;
  }

  if (status === "error") {
    return <ProductsErrorComponent />;
  }

  console.log("rquery", data);
  return <ProductsList products={data} />;
}

export default Products;
