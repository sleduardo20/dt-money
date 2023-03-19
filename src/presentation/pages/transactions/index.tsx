import { Header } from '../../components/header';
import { SearchForm } from '../../components/searchForm';
import { Sumary } from '../../components/sumary';
import { useTransactions } from '../../hooks/useTransactions';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export function Transactions() {
  const { transactions } = useTransactions();

  return (
    <main>
      <Header />
      <Sumary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHightlight $variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHightlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter(transaction.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </main>
  );
}
