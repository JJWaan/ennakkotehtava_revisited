import type { IProduct } from "./product";

export interface IProductContext {
  validCustomerNumber: boolean;
  setValidCustomerNumber: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProducts: IProduct[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  isOrdered: boolean;
  setIsOrdered: React.Dispatch<React.SetStateAction<boolean>>;
}
