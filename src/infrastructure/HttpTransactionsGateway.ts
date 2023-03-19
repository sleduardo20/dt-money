import { Transaction } from '../model/transation';
import { TransactionsGateway } from '../model/transactionGateway';
import { api } from './Axios';

export class HttpTransactionsGateway implements TransactionsGateway {
  private readonly TRANSACTIONS_URL = '/transactions';

  async getTransactions(query?: string): Promise<Transaction[]> {
    const transactions = api
      .get<Transaction[]>(this.TRANSACTIONS_URL, {
        params: {
          q: query,
        },
      })
      .then((res) => res.data);

    return transactions;
  }
}
