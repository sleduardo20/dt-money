import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { transactionsService } from '../../application';
import { Transaction } from '../../model/transation';

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query: string) => Promise<void>;
  createTransactions: (
    description: string,
    price: number,
    category: string,
    type: string,
  ) => Promise<void>;
}

const TransactionContext = createContext({} as TransactionContextType);

interface ProviderProps {
  children: ReactNode;
}

export const TransactionsProvider = ({ children }: ProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await transactionsService.getTransactions(query);
    setTransactions(response);
  }, []);

  const createTransactions = useCallback(
    async (
      description: string,
      price: number,
      category: string,
      type: string,
    ) => {
      const newTransaction = await transactionsService.createTransactions(
        description,
        price,
        category,
        type,
      );

      setTransactions((state) => [...state, newTransaction]);
    },
    [],
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
