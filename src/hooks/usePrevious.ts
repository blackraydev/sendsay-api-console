import { useRef } from 'react';

export function usePrevious<T>(value: T): T {
  const currentRef = useRef<T>(value);
  const previousRef = useRef<T | any>(null);

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
