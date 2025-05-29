import { use } from 'react';

const TEST_DATA = { name: 'John Doe' };

let promise: Promise<{ data: typeof TEST_DATA }> | null = null;

export function useSuspenseQuery1(): { data: typeof TEST_DATA } {
  if (!promise) {
    promise = new Promise(resolve => {
      setTimeout(() => resolve({ data: TEST_DATA }), 2000);
    });
  }

  return use(promise);
}
