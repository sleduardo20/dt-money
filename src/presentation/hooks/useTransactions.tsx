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
  fetchTransactions: (query: string) => Promise<void>;
}

const TransactionContext = createContext({} as TransactionContextType);

interface ProviderProps {
  children: ReactNode;
}

export const TransactionsProvider = ({ children }: ProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async (query?: string) => {
    const response = await transactionsService.getTransactions(query);
    setTransactions(response);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
