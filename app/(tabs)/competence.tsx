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
        <ThemedText type="title">Compétences</ThemedText>
      </ThemedView>
      <ThemedText>Voici mes différentes compétences</ThemedText>
    <Collapsible title="Soif d'apprendre">
        <ThemedText>
          Je suis une personne qui aime apprendre et développer ses compétences
          par lui-même. Mais j'aime aussi pouvoir apprendre avec l'aide d'autre 
          personne pour pouvoir échanger et apprendre de nouvelles choses.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Esprit d'équipe">
        <ThemedText>
            Je suis quelqu'un qui préfère prendre du recule et observer avant d'agir, 
            c'est pourquoi je suis quelqu'un qui aime travailler en équipe pour pouvoir
            échanger et apprendre des autres.
        </ThemedText>
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
