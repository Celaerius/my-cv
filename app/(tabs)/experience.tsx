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
    
      <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{backgroundColor:'transparent'}}>Experience</ThemedText>
      </ThemedView>
      <ThemedText style={{margin:5}}>Voici mes différentes experience dans le milieu du travail</ThemedText>
      <ScrollView horizontal showsVerticalScrollIndicator={false}  style={{width:"100%",}}>
      
        <ThemedView style={styles.Card}>
        <ParallaxScrollView
        
      headerBackgroundColor={{ light: 'lightblue', dark: '#353636' }}
      BackgroundColor={{ light: '#E9EEFD', dark: '#334949' }}
      headerImage={
  
        <Image
          source={require('@/assets/images/Logo_Arrow.png')}
          style={styles.Image}
        />
      }
      >
          <ThemedText type='title' style={ styles.Title }>Arrow IT</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Stage de 500h</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Développeur web et mobile</ThemedText>
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
        
        headerBackgroundColor={{ light: 'lightblue', dark: '#353636' }}
        BackgroundColor={{ light: '#E9EEFD', dark: '#334949' }}
        headerImage={
          <Image
            source={require('@/assets/images/Logo_Fusalp.png')}
            style={styles.Image}
          />
        }
        >
          <ThemedText type='title' style={[ styles.Title ]}>Fusalp</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>CDD 4 mois</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Démonstrateur de vente</ThemedText>
          <ThemedText type='default' style={styles.text}>
            Durant cette expérience, j’ai représenté la marque Fusalp au sein
            du Printemps Haussmann, où j’ai développé mes compétences en vente 
            et en relation client. J’ai eu l’opportunité de conseiller une 
            clientèle exigeante sur des produits techniques et haut de gamme, 
            tout en veillant à valoriser l’image de la marque. Cette mission m’a 
            également appris à maintenir un espace de vente impeccable et à 
            travailler avec rigueur et professionnalisme.
          </ThemedText>
          <ExternalLink href="https://www.google.com/maps/place/FUSALP+PRINTEMPS+HAUSSMANN/@48.8739752,2.3280554,17z/data=!3m2!4b1!5s0x47e66e316714bebb:0x5e2765571e1b0620!4m6!3m5!1s0x47e66f81429b9f79:0x6c54b85e85404700!8m2!3d48.8739752!4d2.3280554!16s%2Fg%2F11j8jy8qcn?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
          style={styles.link}>
            <ThemedText type="link">Voir l'emplacement</ThemedText>
          </ExternalLink>

        </ParallaxScrollView>
        </ThemedView>
        <ThemedView style={styles.Card}>
        <ParallaxScrollView
        
        headerBackgroundColor={{ light: 'lightblue', dark: '#353636' }}
        BackgroundColor={{ light: '#E9EEFD', dark: '#334949' }}
        headerImage={
          <Image
            source={require('@/assets/images/Logo_Ifapme.png')}
            style={styles.Image}
          />
        }
        >
          <ThemedText type='title' style={ styles.Title }>IFAPME</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Formation de 2 ans</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Développeur web et mobile</ThemedText>
          <ThemedText type='default' style={styles.text}>
            C'est durant cette formation que j'ai pu acquérir les bases du développement 
            web et mobile. J'ai pu apprendre à développer des applications web en HTML, CSS, 
            JavaScript, PHP, mais aussi des applications mobile en Java, Kotlin et aussi en React Native. J'ai également 
            pu apprendre à travailler en équipe, à respecter des délais et à travailler avec rigueur.
          </ThemedText>
          <ExternalLink href="https://www.google.com/maps/place/Centre+IFAPME+de+Charleroi+-+Site+E6K/@50.4050498,4.4398805,17z/data=!3m1!4b1!4m6!3m5!1s0x47c2271f60ac5765:0x8a83bbe66a99bfa2!8m2!3d50.4050498!4d4.4398805!16s%2Fg%2F11v_3q7n5v?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"style={styles.link}>
            <ThemedText type="link">Voir l'emplacement</ThemedText>
          </ExternalLink>

        </ParallaxScrollView>
        </ThemedView>
        <ThemedView style={styles.Card}>
        <ParallaxScrollView
        
        headerBackgroundColor={{ light: 'lightblue', dark: '#353636' }}
        BackgroundColor={{ light: '#E9EEFD', dark: '#334949' }}
        headerImage={
          <Image
            source={require('@/assets/images/Logo_Colruyt.png')}
            style={styles.Image}
          />
        }
        >
          <ThemedText type='title' style={ styles.Title }>Culruyt</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Interim de 3 mois</ThemedText>
          <ThemedText type='subtitle' style={styles.subtitle}>Manutantionaire / Préparateur de commande</ThemedText>
          <ThemedText type='default' style={styles.text}>
            Durant cette expérience, j'ai travaillé en tant que manutentionnaire et préparateur de commande 
            dans les entrepots de l'entreprise Culruyt. J'ai pu apprendre à respecter des quota et à 
            travailler avec rigueur tout en respectant les règles de sécurité de l'entreprise.
          </ThemedText>
          <ExternalLink href="https://www.google.com/maps/place/TOR+1+(+Colruyt+Halle)/@50.7284039,4.1767017,14z/data=!4m10!1m2!2m1!1sentrepot+colruyt+halle!3m6!1s0x47c3c90e92870d45:0xd304cc2a898f010f!8m2!3d50.7284039!4d4.2148105!15sChZlbnRyZXBvdCBjb2xydXl0IGhhbGxlIgOIAQGSAQl3YXJlaG91c2XgAQA!16s%2Fg%2F11fp1l9r4p?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"style={styles.link}>
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
  Image: {
    height: 200,
    width: 200,
    bottom: 20,
    left: 60,
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
