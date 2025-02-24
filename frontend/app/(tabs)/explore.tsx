import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/fridge.jpg')} // replace with your image path 
          style={styles.headerImage}
          resizeMode="cover" // ensures the image fills the header area and is zoomed in
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Fridge App</ThemedText>
      </ThemedView>
      <ThemedText>Your Fridge Friend.</ThemedText>
      <Collapsible title="Automatic Grocery List">
        <ThemedText>
          If I notice you're missing a usual ingredient, I will add it to a grocery list. {' '}
          {/* <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText> */}
        </ThemedText>
        {/* <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText> */}
        {/* <ExternalLink href="https://docs.expo.dev/router/introduction"> */}
          <ThemedText type="link">Learn more</ThemedText>
        {/* </ExternalLink> */}
      </Collapsible>
      <Collapsible title="Cross-Platform">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Scan">
        <ThemedText>
          If you scan your fridge I will create a digital pantry of all your existing ingredients. 
        </ThemedText>
          <ThemedText type="link">Learn more</ThemedText>
      </Collapsible>
      <Collapsible title="Personalized Recipes">
        <ThemedText>
          {/* Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '} */}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            Using the ingredients scanned from your fridge, I will create recipes that can be made easily with things you already have at home (You can add general household ingredients that you have as well).
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and Dark Mode">
        <ThemedText>
        This app supports both light and dark mode to ensure the best user experience.
          {/* This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly. */}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Gym Buddy">
        <ThemedText>
          If you choose to be on fitness mode, I can also track and take into consideration calories, macros, nutritional value, dietary restrictions (including bulking/cutting), and help better curate the recipes to align with your fitness and diet goals.
          {/* This template includes an example of an animated component. The{' '} */}
          {/* <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation. */}
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });
const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 310, // Set the height to match the desired size
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: 20, // Optional: Add padding to position the text properly
  },
});
