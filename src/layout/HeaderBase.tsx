import { useContext } from "react";
import { ProductContext } from "../App";

import { Stack } from "@mui/material";

import HeaderLogo from "./HeaderLogo";
import OrderActionsBase from "../components/OrderActionsBase";

function HeaderBase() {
  const productContext = useContext(ProductContext);

  return (
    <header
      style={{
        padding: "1.2rem 1rem",
      }}
    >
      <Stack
        direction="row"
        flexGrow={1}
        flexWrap="wrap"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <HeaderLogo />
        {productContext.validCustomerNumber && <OrderActionsBase />}
      </Stack>
    </header>
  );
}

export default HeaderBase;
