import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { transactionsService } from '../../application';
import { Transaction } from '../../model/transation';

interface TransactionContextType {
  transactions: Transaction[];
}

const TransactionContext = createContext({} as TransactionContextType);

interface ProviderProps {
  children: ReactNode;
}

export const TransactionsProvider = ({ children }: ProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const response = await transactionsService.getTransactions();
    setTransactions(response);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
