export const CODIFY_TEXT = 'CODIFY_TEXT'

  export function codifyText(text) {
    return {
        type: 'CODIFY_TEXT',
        payload: text
    }
  }
