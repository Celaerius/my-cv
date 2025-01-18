import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { View, ScrollView, Text} from 'react-native';
import LogoArrow from '@/assets/svg/Logo_Arrow_RVB.svg';

export default function TabTwoScreen() {
  return (
    
      <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{backgroundColor:'transparent'}}>Experience</ThemedText>
      </ThemedView>
      <ThemedText style={{margin:5}}>Voici mes différentes experience dans le milieu du travail</ThemedText>
      <ScrollView horizontal showsVerticalScrollIndicator={false}  style={{width:"100%",}}>
      
        <ThemedView style={styles.Card}>
        <ParallaxScrollView
        
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <LogoArrow
      width="100%" // Adapte le SVG à la largeur
      height={200} // Hauteur personnalisée
      preserveAspectRatio="xMidYMid slice" // Optionnel, ajuste l'échelle
    />
      }
      >
          <ThemedText type='title' style={ styles.Title }>Arrow IT</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Stage de 500h</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Developpeur web et mobile</ThemedText>
          <ThemedText type='default' style={styles.text}>
            C'est durant ce stage que j'ai pu acquérir la plupart 
            de mes compétences en développement. J'ai eu l'occasion de travailler sur une 
            application mobile en React Native avec l'aide des autres employés de la société. 
            J'ai également pu participer à une partie du backend de l'application en Laravel.{`\n`} 
            J'y ai aussi appris le travail en équipe, ainsi que la rigueur et la persévérance 
            que demande ce métier.
          </ThemedText>
          <ExternalLink href="https://arrow-it.be" style={styles.link}>
            <ThemedText type="link">Leur site web</ThemedText>
          </ExternalLink>
          </ParallaxScrollView>
        </ThemedView>
        <ThemedView style={styles.Card}>
        <ParallaxScrollView
        
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <Image
            source={require('@/assets/images/fond-competence.jpeg')}
            style={styles.backImage}
          />
        }
        >
          <ThemedText type='title' style={ styles.Title }>Fusalp</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>CDD 4 mois</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Démonstrateur de vente</ThemedText>
          <ThemedText type='default' style={styles.text}>
            
          </ThemedText>
          <ExternalLink href="https://www.google.com/maps/place/FUSALP+PRINTEMPS+HAUSSMANN/@48.8739752,2.3280554,17z/data=!3m2!4b1!5s0x47e66e316714bebb:0x5e2765571e1b0620!4m6!3m5!1s0x47e66f81429b9f79:0x6c54b85e85404700!8m2!3d48.8739752!4d2.3280554!16s%2Fg%2F11j8jy8qcn?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
          style={styles.link}>
            <ThemedText type="link">Voir l'emplacement</ThemedText>
          </ExternalLink>

        </ParallaxScrollView>
        </ThemedView>
        <ThemedView style={styles.Card}>
        <ParallaxScrollView
        
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <Image
            source={require('@/assets/images/fond-competence.jpeg')}
            style={styles.backImage}
          />
        }
        >
          <ThemedText type='title' style={ styles.Title }>Culruyt</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Interim de 3 mois</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Manutantionaire</ThemedText>
          <ThemedText type='default' style={styles.text}>
            De la manutention, de la préparation de commande,
          </ThemedText>
          <ExternalLink href=""style={styles.link}>
            <ThemedText type="link">Voir l'emplacement</ThemedText>
          </ExternalLink>

        </ParallaxScrollView>
        </ThemedView>
      </ScrollView>
      
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  Card: {
    backgroundColor: 'lightgrey',
    width: 330,
    height: 500,
    borderRadius: 10,
    margin: 10,
    position: 'relative', 
  },
  Title: {
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    marginLeft: 10,
  },
  text: {
    margin: 15,
  },
  link: {
    position: 'absolute', 
    bottom: 5,
    right: 10,
    alignSelf: 'flex-end',

    backgroundColor: 'transparent', 
  },
  
});
