export const formatJson = (obj: string | object) => {
  if (typeof obj === 'object') {
    return JSON.stringify(obj, null, 3);
  } else {
    return JSON.stringify(JSON.parse(obj), null, 3);
  }
};
