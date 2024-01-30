/**
 * Transform a hexadecimal color string into an integer value.
 * @param colorHex The hexadecimal color code.
 * @returns The integer value.
 */
export function colorHexToInt(colorHex: string): number {
  return Number('0x' + colorHex.split("#").join(""));
}

/**
 * Transform a camelCase string into a kebab-case string.
 * @param str The string to transform.
 * @returns The kebabed string.
 */
export function camelToKebab(str: string): string {
  let newStr: string = str[0];

  for (let i: number = 1; i < str.length; i++) {
    if (newStr === newStr.toUpperCase() && (/[a-zA-Z]/gm).test(newStr)) newStr += `-`;
    newStr += str[i];
  }

  return newStr;
}
