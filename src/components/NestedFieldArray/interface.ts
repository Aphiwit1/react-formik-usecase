export interface Option {
  name: string;
  value: string;
  country?: string;
}

export interface Order {
  productName: string;
  type: "normal" | "special";
  options: Option[];
}

export interface FormValues {
  orders: Order[];
}
