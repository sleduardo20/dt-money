import { Transaction } from './transation';

export interface TransactionGateway {
  getTransactions: () => Promise<Transaction[]>;
}
