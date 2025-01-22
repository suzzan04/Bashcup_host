export interface Item {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  isSpecial?: boolean;
}
export interface ItemDetail extends Item {
  _id: string;
}

export interface CartItem extends ItemDetail {
  quantity: number;
}

// export interface Handicraft extends Item {
//   credit: string;
// }
