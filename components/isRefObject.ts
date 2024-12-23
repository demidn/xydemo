import { RefObject } from 'react';

export function isRefObject<T>(it: unknown): it is RefObject<T> {
  return it !== undefined && typeof it === 'object' && Object.prototype.hasOwnProperty.call(it, 'current');
}

