import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { View, ScrollView, Text} from 'react-native';

export default function TabTwoScreen() {
  return (
    <ThemedView BackgroundColor={{ light: '#F4ECFE', dark: '#160B1E' }} style={{ height: '100%' }}>
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
        <ThemedText type="title">Compétences</ThemedText>
      </View>
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
      <Collapsible title="Organisé">
        <ThemedText>
          Je suis quelqu'un qui est organisé dans son travail ce qui permet
          de ne pas perdre de temps et de pouvoir travailler plus efficacement.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Autodidacte">
        <ThemedText>
          J'ai une très bonne capacité d'apprentissage ce qui me permet de m'adapté
          à de nouvelles situations et de pouvoir apprendre de nouvelles choses rapidement
          et efficacement.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
    </ThemedView>
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
    height: 0,
    width: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
