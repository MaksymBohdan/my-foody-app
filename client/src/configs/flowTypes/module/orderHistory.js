// @flow

export type OrderHistoryFormState = {
  address: string,
  date: number,
  price: number | string,
  rating: number | string,
};

export type OrderHistory = {
  address: string,
  date: number,
  id: number,
  price: number | string,
  rating: number | string,
};

export type PostOrderHistory = {
  data: OrderHistoryFormState,
  status: string,
};
export type DeleteOrderHistory = boolean;

export type OrderHistoryFormProps = {
  addItemOrderHistory: OrderHistoryFormState => Promise<void>,
};

export type OrderHistoryGridContainerState = {
  ordersHistory: Array<OrderHistory>,
  singleOrder: OrderHistory | {},
  loading: boolean,
  error: ?string,
  isModalOpen: boolean,
};

export type orederHistoryGridViewProps = {
  ordersHistory: Array<OrderHistory>,
  onDelete: (id: number) => Promise<void>,
  handleModalOpen: (id: number) => void,
};

export type orderHistorySingleItemView = {
  singleOrder: OrderHistory,
  onClose: () => void,
  isModalOpen: boolean,
};
