import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useSumary } from '../../hooks/useSumary';

import { priceFormatter } from '../../utils/formatter';
import { SumaryCard, SumaryContainer } from './styles';

export const Sumary = () => {
  const { income, outcome, total } = useSumary();

  return (
    <SumaryContainer>
      <SumaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(income)}</strong>
      </SumaryCard>
      <SumaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>
          {' -'} {priceFormatter.format(outcome)}
        </strong>
      </SumaryCard>
      <SumaryCard $variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(total)}</strong>
      </SumaryCard>
    </SumaryContainer>
  );
};
