import { use } from 'react';

const TEST_USER = { id: '123' };

let promise: Promise<{ data: typeof TEST_USER }> | null = null;

export function useSuspenseQuery2(): { data: typeof TEST_USER } {
  if (!promise) {
    promise = new Promise(resolve => {
      // If this is about 200ms or below, the error happens.
      setTimeout(() => resolve({ data: TEST_USER }), 200);
    });
  }

  return use(promise);
}
