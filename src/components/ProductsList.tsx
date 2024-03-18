import { useContext } from "react";

import { Stack, Typography } from "@mui/material";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

import type { IProduct } from "../types/product";
import { ProductContext } from "../App";

interface ProductListProps {
  products: IProduct[];
}

function ProductsList({ products }: ProductListProps) {
  const context = useContext(ProductContext);

  const handleSelect = (selectedProduct: IProduct) => {
    context.setSelectedProducts((prevSelectedProducts: IProduct[]) => {
      if (
        prevSelectedProducts.some(
          (product) => product.id === selectedProduct.id
        )
      ) {
        return prevSelectedProducts.filter(
          (product) => product.id !== selectedProduct.id
        );
      } else {
        return [...prevSelectedProducts, selectedProduct];
      }
    });
  };

  if (!context) {
    return (
      <Stack>
        <Typography
          variant="h4"
          justifyContent="center"
          alignItems="center"
          boxShadow="1rem 1rem 0.4rem"
        >
          Seems like the application is having a trouble.
        </Typography>
        <Typography>Please try to refresh the page!</Typography>
        <Typography>
          If you keep having troubles, please call Us @
          1800-Bakery/JuusoWaananen,
        </Typography>
        <Typography>We are happy to help You out!</Typography>
      </Stack>
    );
  }

  return (
    <Stack
      id="products-list-children-wrapper"
      flex={1}
      alignItems="center"
      gap={4}
    >
      <Stack
        id="product-cards-wrapper"
        direction="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        gap={1}
      >
        {products?.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            product={product}
            handleSelect={handleSelect}
          />
        ))}
      </Stack>
      <Pagination />
    </Stack>
  );
}

export default ProductsList;
