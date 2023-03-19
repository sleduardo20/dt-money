import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './hooks/useTransactions';
import { Transactions } from './pages/transactions';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
