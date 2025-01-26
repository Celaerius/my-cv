import { Image, StyleSheet, Platform } from 'react-native';
import { View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  
  return (
    <ThemedView BackgroundColor={{light: '#F4ECFE', dark: '#160B1E'}}style={{ height: '100%' }}>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A393BF', dark: '#4D485B' }}
      BackgroundColor={{ light: '#F4ECFE', dark: '#160B1E' }}
      headerImage={
        <Image
          source={require('@/assets/images/Logo_Fusalp.png')}
          style={styles.backImage}
        />
      }>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Bonjour</ThemedText>
        <HelloWave />
      </View>
      <View style={styles.stepContainer}>
        <ThemedText type="subtitle">Présentation</ThemedText>
        <ThemedText>
          Je m'appelle <ThemedText type="defaultSemiBold">Charles-Edouard</ThemedText>,{' '}
          j'ai 24 ans et je suis développeur web et mobile.
        </ThemedText>
      </View>
    </ParallaxScrollView>
    </ThemedView>
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
    height: 0,
    width: 0,
    bottom: -50,
    left: 0,
    position: 'absolute',
  },
});
