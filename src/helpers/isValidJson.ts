export const isValidJson = (req: string) => {
  try {
    var o = JSON.parse(req);
    if (o && typeof o === 'object') {
      return true;
    }
  } catch (e) {}

  return false;
};
