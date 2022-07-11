import { pathResolve } from './utils'

export function createAlias () {
  return {
    '@': pathResolve('./src'),
    '#': pathResolve('./src/types')
  }
}
