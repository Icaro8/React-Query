export const DataFormat = (date: string) =>
  new Intl.DateTimeFormat("pt-BR").format(new Date(date));
