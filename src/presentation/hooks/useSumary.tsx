import { useMemo } from 'react';
import { useTransactions } from './useTransactions';

export const useSumary = () => {
  const { transactions } = useTransactions();

  const { income, outcome, total } = useMemo(
    () =>
      transactions.reduce(
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
      ),
    [transactions],
  );

  return { income, outcome, total };
};
