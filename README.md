# rns-react-state-error-repro

## Error to reproduce:
```
 ERROR  Warning: Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.

  4 |
  5 | function AppLayoutContents() {
> 6 |   const { data } = useSuspenseQuery2();
    |                                     ^
  7 |   console.log('data', data);
  8 |
  9 |   return (

Call Stack
  TabLayout(./(app)/(tabs)/_layout.tsx) (<anonymous>)
  ScreenContentWrapper (<anonymous>)
  RNSScreenStack (<anonymous>)
  AppLayoutContents (app/(app)/_layout.tsx:6:37)
  AppLayout(./(app)/_layout.tsx) (<anonymous>)
  RootLayout(./_layout.tsx) (<anonymous>)
  RNCSafeAreaProvider (<anonymous>)
  App (<anonymous>)
  ErrorOverlay (<anonymous>)
```

## Steps to reproduce in Expo Go
1. Clone react-state-warning-repro repo
2. Run `npm install`
3. Run `npx expo start` to start the development server
4. Ensure you're in Expo Go. Press s to switch to Expo Go if you're in development build. If you already have an app open in Expo Go, make sure to quit out first.
5. Press i to open iOS simulator and reproduce.
6. Press a to open Android simulator and reproduce.