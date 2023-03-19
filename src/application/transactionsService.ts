import { TransactionsGateway } from '../model/transactionGateway';

export class TransactionsService {
  private gateway: TransactionsGateway;

  constructor(gateway: TransactionsGateway) {
    this.gateway = gateway;
  }

  async getTransactions(query?: string) {
    return this.gateway.getTransactions(query);
  }

  async createTransactions(
    description: string,
    price: number,
    category: string,
    type: string,
  ) {
    return this.gateway.createTransactions(description, price, category, type);
  }
}
