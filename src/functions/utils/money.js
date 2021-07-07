export const floatToCurrency = (value) => {
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
};
