export const isValidJson = (req: string) => {
  try {
    JSON.parse(req);
    return true;
  } catch (e) {
    return false;
  }
};
