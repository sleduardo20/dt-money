export const dateFormatter = (date: string) => {
  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat('pt-BR').format(parsedDate);
};
export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
