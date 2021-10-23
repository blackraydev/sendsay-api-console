export const checkForCyrillic = (str: string): boolean => {
  const cyrillicPattern = /[а-яА-ЯЁё]/;
  return cyrillicPattern.test(str);
};
