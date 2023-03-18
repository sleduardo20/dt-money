import { Transaction } from '../model/transation';
import { TransactionsGateway } from '../model/transactionGateway';

export class HttpTransactionsGateway implements TransactionsGateway {
  async getTransactions(): Promise<Transaction[]> {
    const transactions = await fetch('http://localhost:3333/transactions')
      .then((response) => response.json())
      .then((data) => data);

    return transactions;
  }
}
