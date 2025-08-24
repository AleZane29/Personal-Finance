export interface Transaction {
  id: number;
  date: string;
  amount: number;
  currency: string;
  description: string;
  category: string;
  subCategory: string | null;
}
