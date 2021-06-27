import { removeFromArray } from "./removeFromArray";

export const open = (object: any, key: string) => {
  let current = object;

  key.split(".").forEach((subkey) => {
    if (!current) return undefined;

    let subSubKeysaaaa: string[] = [];
    let subKeyWithoutIndexaaaa = "";
    if (subkey.includes("[")) {
      const { subSubKeys, subKeyWithoutIndex } = subSubKeyOpener(subkey);
      subSubKeysaaaa = subSubKeys;
      subKeyWithoutIndexaaaa = subKeyWithoutIndex;
    }
    if (subSubKeysaaaa.length > 0) {
      console.log(current);

      const indexInArray = parseInt(subSubKeysaaaa[0], 10);
      console.log(indexInArray);
      current = current[subKeyWithoutIndexaaaa];

      current = current[indexInArray];
      console.log(current);
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
