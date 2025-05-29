import { Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSuspenseQuery1 } from '../../../hooks/queries/useSuspenseQuery1';

function DataDisplay() {
  const { data } = useSuspenseQuery1();

  return (
    <Text>
      {data.name}
    </Text>
  );
}

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Suspense fallback={null}>
        <DataDisplay />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
