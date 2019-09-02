// @flow

export type OrderHistory = {
  address: string,
  date: string,
  id: number,
  price: string,
  rating: number,
};

export type DeleteOrderHistory = boolean;

export type PostOrderHistory = {
  data: OrderHistory,
  status: string,
};
