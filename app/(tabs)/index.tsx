import { Image, StyleSheet, Platform } from 'react-native';
import { View, TouchableOpacity, Linking } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';

export default function HomeScreen() {

  return (
    <ThemedView
      BackgroundColor={{ light: '#F4ECFE', dark: '#160B1E' }}
      style={{ height: '100%' }}
    >
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A393BF', dark: '#4D485B' }}
        BackgroundColor={{ light: '#F4ECFE', dark: '#160B1E' }}
        headerImage={
          <Image
            source={require('@/assets/images/Profil.jpg')}
            style={styles.profileImage}
          />
        }
      >

        <View style={styles.titleContainer}>
          <ThemedText type="title">Bonjour</ThemedText>
          <HelloWave />
        </View>

        <View style={styles.sectionContainer}>
          <ThemedText type="subtitle">Présentation</ThemedText>
          <ThemedText>
            Je m'appelle{' '}
            <ThemedText type="defaultSemiBold">
              Charles-Edouard Robine
            </ThemedText>
            , j'ai 24 ans et je suis développeur Front-End avec quelques notions
            de Back-End.
          </ThemedText>
          <ThemedText>
            J'adore apprendre de nouvelles technologies et explorer tout ce qui
            touche au domaine informatique.
          </ThemedText>
        </View>

        <View style={styles.sectionContainer}>
          <ThemedText type="subtitle">Mes hobbies</ThemedText>
          <ThemedText>- Me promener dans la nature</ThemedText>
          <ThemedText>- Jouer aux jeux vidéo</ThemedText>
          <ThemedText>- Lire des livres instructifs et des mangas</ThemedText>
        </View>

        <View style={styles.sectionContainer}>
          <ThemedText type="subtitle">Me contacter</ThemedText>
          <ExternalLink href='https://www.linkedin.com/in/charles-edouard-robine-403a35280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <ThemedText type="link">Mon LinkedIn</ThemedText>
          </ExternalLink>
          <ExternalLink href='https://github.com/Celaerius'>
            <ThemedText type="link">Mon GitHub</ThemedText>
          </ExternalLink>
          
    
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
    marginBottom: 16,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 16,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    position: 'absolute',
    top: Platform.select({ ios: 100, android: 70 }),
    left: 150,
    borderWidth: 2,
    borderColor: '#A393BF',
  },
});
