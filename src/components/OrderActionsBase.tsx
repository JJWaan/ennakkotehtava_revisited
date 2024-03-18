import { useContext, useEffect, useState } from "react";

import { ProductContext } from "../App";

import { Button, Stack, Typography } from "@mui/material";

function OrderActionsBase() {
  const productContext = useContext(ProductContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showOrderErrorMessage, setShowOrderErrorMessage] = useState(false);

  useEffect(() => {
    if (productContext) {
      let price = productContext.selectedProducts.reduce(function (acc, obj) {
        return acc + obj.amount;
      }, 0);

      setTotalPrice(price);
    }
  }, [productContext]);

  const formattedTotalPrice = new Intl.NumberFormat("fi-FI", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  }).format(totalPrice);

  const handleClickOrderBtn = () => {
    if (productContext.selectedProducts.length !== 0) {
      productContext.setIsOrdered(!productContext.isOrdered);
    } else {
      setShowOrderErrorMessage(!showOrderErrorMessage);
    }
  };

  return (
    <>
      {showOrderErrorMessage && (
        <div>
          <h2>🧁 Hey, please select some products to order, Thank You! 🧁</h2>
        </div>
      )}
      <Stack id="order-actions-base-row" direction="row" gap={4}>
        <Stack alignItems="center">
          <Typography id="total-price" textAlign="center">
            {formattedTotalPrice} €
          </Typography>
          <Typography id="order-status" textAlign="center">
            {productContext.isOrdered ? "Ordered" : "Not ordered"}
          </Typography>
        </Stack>
        {productContext.isOrdered ? null : (
          <Button variant="outlined" onClick={() => handleClickOrderBtn()}>
            ORDER
          </Button>
        )}
      </Stack>
    </>
  );
}

export default OrderActionsBase;
