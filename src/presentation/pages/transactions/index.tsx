import { useEffect, useState } from 'react';
import { Transaction } from '../../../model/transation';
import { Header } from '../../components/header';
import { SearchForm } from '../../components/searchForm';
import { Sumary } from '../../components/sumary';
import {
  PriceHightlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    await fetch('http://localhost:3333/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  console.log(transactions);

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
                  <PriceHightlight $variant="income">
                    {transaction.price}
                  </PriceHightlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </main>
  );
}
