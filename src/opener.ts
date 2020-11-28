export const open = (object: any, key:string) => {
  let current = object;

  key.split(".").forEach((subkey) => {
    if (!current) return undefined;
    current = current[subkey];
  });
  
  return current;
};

