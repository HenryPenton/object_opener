import { removeFromArray } from "./removeFromArray";

export const open = (object: any, key: string) => {
  let current = object;

  key.split(".").forEach((subkey) => {
    if (!current) return undefined;

    if (subkey.includes("[")) {
      const { subSubKeys, subKeyWithoutIndex } = subSubKeyOpener(subkey);
      current = current[subKeyWithoutIndex];

      for (let index = 0; index < subSubKeys.length; index++) {
        const subSubKey = subSubKeys[index];
        const indexInArray = parseInt(subSubKey, 10);

        current = current[indexInArray];
      }
    } else {
      current = current[subkey];
    }
  });

  return current;
};

const subSubKeyOpener = (subkey: string) => {
  let subKeySplit = subkey.split("[");
  const subKeyWithoutIndex = subKeySplit[0];
  removeFromArray(subKeySplit, subKeySplit[0]);

  const subSubKeys: string[] = [];
  subKeySplit.forEach((subSubKey) => subSubKeys.push(subSubKey.split("]")[0]));
  return { subSubKeys, subKeyWithoutIndex };
};
