import { Stack } from 'expo-router';
import { Suspense } from 'react';
import { useSuspenseQuery2 } from '../../hooks/queries/useSuspenseQuery2';

function AppLayoutContents() {
  const { data } = useSuspenseQuery2();
  console.log('data', data);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

export default function AppLayout() {
  return (
    <Suspense fallback={null}>
      <AppLayoutContents />
    </Suspense>
  );
}
