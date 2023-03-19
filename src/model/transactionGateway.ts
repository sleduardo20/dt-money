import { Transaction } from './transation';

export interface TransactionsGateway {
  getTransactions: (query?: string) => Promise<Transaction[]>;
  createTransactions: (
    description: string,
    price: number,
    category: string,
    type: string,
  ) => Promise<Transaction>;
}
