const shift = 7;

const textEncrypt = (text: string): string => {
  return text
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      return String.fromCharCode(charCode + shift);
    })
    .join("");
};

export { textEncrypt };
