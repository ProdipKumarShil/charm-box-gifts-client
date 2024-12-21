export type Product = {
  name: string;
  email: string;
  description: string;
  imgUrl: string,
  price: number;
  category: 'dress' | 'toys' | 'cosmetics' | 'pets' | 'foods';
  genderType: 'male' | 'female';
  brand: string;

}

export type User = {
  name?: string;
  email: string;
  role?: 'admin' | 'seller' | 'buyer';
  imgUrl?: string;
  wishlist?: string[];
  cart: string[];
  status: 'pending' | 'approved';
}