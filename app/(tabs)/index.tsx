import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      BackgroundColor={{ light: 'white', dark: '#151718' }}
      headerImage={
        <Image
          source={require('@/assets/images/fond-test.jpeg')}
          style={styles.backImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bonjour</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Présentation</ThemedText>
        <ThemedText>
          Je m'appelle <ThemedText type="defaultSemiBold">Charles-Edouard</ThemedText>,{' '}
          j'ai 24 ans et je suis développeur web et mobile.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  backImage: {
    height: 310,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
