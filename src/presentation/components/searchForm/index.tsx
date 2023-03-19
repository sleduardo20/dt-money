import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { coldDownFrom } from '../../utils/colddown';
import { useTransactions } from '../../hooks/useTransactions';

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const { fetchTransactions } = useTransactions();

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await coldDownFrom(700);
    await fetchTransactions(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transacoes"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
