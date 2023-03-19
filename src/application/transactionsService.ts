import { TransactionsGateway } from '../model/transactionGateway';

export class TransactionsService {
  private gateway: TransactionsGateway;

  constructor(gateway: TransactionsGateway) {
    this.gateway = gateway;
  }

  async getTransactions(query?: string) {
    return this.gateway.getTransactions(query);
  }
}
