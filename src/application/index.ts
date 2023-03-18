import { HttpTransactionsGateway } from '../infrastructure/HttpTransactionsGateway';
import { TransactionsService } from './transactionsService';

const httpTransactionGateway = new HttpTransactionsGateway();
const transactionsService = new TransactionsService(httpTransactionGateway);

export { transactionsService };
