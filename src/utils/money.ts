const formatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
})

export const formatMoney = (value: number): string => formatter.format(value)
