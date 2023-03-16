import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useTransactions } from '../../hooks/useTransactions';
import { SumaryCard, SumaryContainer } from './styles';

export const Sumary = () => {
  const { transactions } = useTransactions();

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    { income: 0, outcome: 0, total: 0 },
  );
  return (
    <SumaryContainer>
      <SumaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{sumary.income}</strong>
      </SumaryCard>
      <SumaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{sumary.outcome}</strong>
      </SumaryCard>
      <SumaryCard $variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{sumary.total}</strong>
      </SumaryCard>
    </SumaryContainer>
  );
};
