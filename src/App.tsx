import { createContext, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./themes/defaultTheme";

import LayoutBase from "./layout/LayoutBase";

import type { IProduct } from "./types/product";
import type { IProductContext } from "./types/productContext";

export const ProductContext = createContext<IProductContext>({
  validCustomerNumber: false,
  setValidCustomerNumber: () => {},
  selectedProducts: [],
  setSelectedProducts: () => {},
  isOrdered: false,
  setIsOrdered: () => {},
});

function App() {
  const queryClient = new QueryClient();

  const [validCustomerNumber, setValidCustomerNumber] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
  const [isOrdered, setIsOrdered] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ProductContext.Provider
        value={{
          validCustomerNumber,
          setValidCustomerNumber,
          selectedProducts,
          setSelectedProducts,
          isOrdered,
          setIsOrdered,
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <LayoutBase />
        </ThemeProvider>
      </ProductContext.Provider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
