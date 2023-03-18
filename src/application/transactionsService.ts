import { TransactionsGateway } from '../model/transactionGateway';

export class TransactionsService {
  private gateway: TransactionsGateway;

  constructor(gateway: TransactionsGateway) {
    this.gateway = gateway;
  }

  async getTransactions() {
    return this.gateway.getTransactions();
  }
}
