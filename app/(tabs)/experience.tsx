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
          source={require('@/assets/images/fond-competence.jpeg')}
          style={styles.backImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Experience</ThemedText>
      </ThemedView>
      <ThemedText>Voici mes différentes experience dans le milieu du travail</ThemedText>
      <Collapsible title="Arrow IT">
        <ThemedText>
          J'ai réalisé un stage de 500h dans la société{' '}
          <ThemedText type="defaultSemiBold">Arrow IT</ThemedText>{' '}
          en tant que développeur web et mobile.
        </ThemedText>
        <ExternalLink href="https://arrow-it.be">
          <ThemedText type="link">Leurs liens</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Fusalp">
        <ThemedText>
          J'ai travaillé dans les grands magasin Printemps Haussman pour la marque{' '}
          <ThemedText type="defaultSemiBold">Fusalp</ThemedText> et j'ai appris à{' '}
          <ThemedText type="defaultSemiBold">travailler en équipe</ThemedText>
        </ThemedText>
        <ExternalLink href="https://www.google.com/maps/place/FUSALP+PRINTEMPS+HAUSSMANN/@48.8739752,2.3280554,17z/data=!3m2!4b1!5s0x47e66e316714bebb:0x5e2765571e1b0620!4m6!3m5!1s0x47e66f81429b9f79:0x6c54b85e85404700!8m2!3d48.8739752!4d2.3280554!16s%2Fg%2F11j8jy8qcn?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D">
          <ThemedText type="link">Voir l'emplacement</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  backImage: {
    height: 310,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
