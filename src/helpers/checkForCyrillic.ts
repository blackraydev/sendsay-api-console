export const checkForCyrillic = (str: string): boolean => {
  const cyrillicPattern = /^[\u0400-\u04FF]+$/;
  return cyrillicPattern.test(str);
};
