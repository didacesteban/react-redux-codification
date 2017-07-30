export function codify(text) {
  let textCodified = '';
  for (let i = 0, len = text.length; i < len; i++) {
      textCodified += `${text[i]}1`;
  }
  return textCodified;
}
