import { match } from 'assert'
import { replaceElementsInArrayAtAGivenPlace } from '../arrays/arrays'

/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters

 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  // Write your code here
  if (
    typeof newWord !== 'string' ||
    typeof needle !== 'string' ||
    typeof haystack !== 'string'
  ) {
    throw new Error('All this elements must be strings')
  }
  const regex = new RegExp(needle, 'gi')
  return haystack.replaceAll(regex, (match) => {
    let resultWord = ''

    for (let i = 0; i < needle.length; i++) {
      const word = match[i]
      const newWord2 = newWord[i]

      if (!newWord2) {
        break
      }
      if (word === word.toUpperCase()) {
        resultWord += newWord2.toUpperCase()
      } else {
        resultWord += newWord2.toLowerCase()
      }
    }
    return resultWord
  })
}
