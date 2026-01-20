import { error } from 'console'
import { errorMonitor } from 'events'
import { NetworkResources } from 'inspector/promises'
import { ExpectTypeOf } from 'vitest'

/**
 * @param {number} diameter
 * @return {number} sphere volume
 */

export function computeSphereVolume(diameter) {
  // Write your code here
  if (typeof diameter === 'string' || diameter < 0 || Number.isNaN(diameter)) {
    throw new Error('Must be a valid number')
  }
  const radius = diameter / 2
  const math = 4 / 3
  return math * Math.PI * radius ** 3
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */

export function roundNumberToOneDecimals(n) {
  // Write your code here
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('Must be a valid number')
  }
  return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */

export function computeAverage(grades) {
  // Write your code here
  if (!Array.isArray(grades)) {
    throw new Error('Must be a valid table')
  }
  for (const grade of grades) {
    if (typeof grade !== 'number' || Number.isNaN(grade)) {
      throw new Error('Must be a valid number')
    }
  }
  let sum = 0
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
  }
  return sum / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */

export function roundedAverage(grades) {
  // Write your code here
  if (!Array.isArray(grades)) {
    throw new Error('Must be a valid table')
  }
  for (const grade of grades) {
    if (typeof grade !== 'number' || Number.isNaN(grade)) {
      throw new Error('Must be a valid number')
    }
  }
  let sum = 0
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
  }
  const sumGrade = sum / grades.length
  return Math.round(sumGrade * 10) / 10
}
