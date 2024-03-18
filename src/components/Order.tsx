import { useContext } from "react";
import { ProductContext } from "../App";

import { Fade, Stack, Typography } from "@mui/material";

import ProductCardOrdered from "./ProductCardOrdered";

function Order() {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h4" boxShadow="1rem 1rem 0.4rem">
          Whoopsies! Seems like the application is having a trouble.
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
    <Fade in timeout={3200}>
      {productContext.selectedProducts.length > 1 ? (
        <Stack justifyContent="center" alignItems="center">
          <p className="order-page-paragraph">
            Here are Your ordered bakeries 😋
          </p>
          <Stack
            id="order-cards-wrapper"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            alignItems="center"
            gap={1}
          >
            {productContext.selectedProducts.map((produkti) => (
              <ProductCardOrdered key={produkti.id} product={produkti} />
            ))}
          </Stack>
          <p className="order-page-paragraph">Thank You for your order!</p>
        </Stack>
      ) : (
        <Fade in timeout={3200}>
          <Stack justifyContent="center" alignItems="center">
            <p>
              One {productContext.selectedProducts[0].name} coming right up!
            </p>
            <ProductCardOrdered product={productContext.selectedProducts[0]} />
            <p>Thank You for your order!</p>
          </Stack>
        </Fade>
      )}
    </Fade>
  );
}

export default Order;
