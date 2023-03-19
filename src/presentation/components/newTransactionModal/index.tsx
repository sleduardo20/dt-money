import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles';

import { coldDownFrom } from '../../utils/colddown';

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
});

type NewTransactionForm = zod.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<NewTransactionForm>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  });

  const handleNewTransaction = async (data: NewTransactionForm) => {
    await coldDownFrom(500);

    console.log(data);
  };

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transacao</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input
            {...register('description')}
            type="text"
            placeholder="Descricao"
            required
          />
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            placeholder="Preco"
            required
          />
          <input
            {...register('category')}
            type="text"
            placeholder="Categoria"
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton $variant="income" value="icome">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton $variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button disabled={isSubmitting} type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
