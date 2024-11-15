import React, { useEffect, useState } from 'react';

import { View, FlatList, StyleSheet, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/commonjs/src/types';

import { getPersonnageImageURI } from '@/app/components/imageSession';
import ListItem from '@/app/components/ListItem';
import TopBar from '@/app/components/TopBar';
import { useSession } from '@/app/hooks/sessionContext';
import { useTheme } from '@/app/hooks/themeContext';
import useGoBack from '@/app/navigation/useGoBack';
import { getPersonnagesByPlanete, Personnage } from '@/app/services/creerSessionFetch';
import { RootStackParamList } from '@/app/types';
import { ThemedStyles } from '@/app/utils/styles';

type ChoisirPersonnageScreenProp = StackNavigationProp<RootStackParamList, 'ChoisirPersonnage'>;

const ChoisirPersonnage: React.FC = () => {
  const navigation = useNavigation<ChoisirPersonnageScreenProp>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const { currentSession, createNewSession } = useSession();
  const [personnages, setPersonnages] = useState<Personnage[]>([]);
  const styleTheme = ThemedStyles(theme);

  const prenom = currentSession?.prenom || '';
  const planeteRef = currentSession?.planeteRef || '';

  useEffect(() => {
    const fetchPersonnages = async () => {
      try {
        if (planeteRef && typeof planeteRef === 'string') {
          const data = await getPersonnagesByPlanete(planeteRef);
          setPersonnages(data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des personnages:', error);
      }
    };
    fetchPersonnages();
  }, [planeteRef]);

  const handleSelectPersonnage = async (personnage: Personnage) => {
    try {
      if (prenom && planeteRef && personnage._id) {
        const newSession = await createNewSession({
          prenom,
          planeteRef,
          personnageRef: personnage._id,
        });
        if (newSession && newSession._id) {
          navigation.navigate('Histoire', {
            histoire: personnage.histoire,
            personnageNom: personnage.nom,
            sessionPrenom: prenom,
            sessionId: newSession._id,
          });
        } else {
          console.error("La session n'a pas été créée correctement.");
        }
      } else {
        console.error('Données de session manquantes :', prenom, planeteRef, personnage._id);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de la session :', error);
    }
  };

  const renderItem = ({ item }: { item: Personnage }) => (
    <ListItem
      imageURI={getPersonnageImageURI(item.nom)}
      text={item.nom}
      onPress={() => handleSelectPersonnage(item)}
    />
  );

  return (
    <View style={styleTheme.CONTAINER}>
      <TopBar
        titre="Choisir un"
        prenom="personnage"
        iconeGaucheNom="arrow-back-outline"
        iconeGaucheAction={goBack}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={() => navigation.navigate('AccueilApresConnexion', { refresh: true })}
      />
      <FlatList
        data={personnages}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.row}
      />
    </View>
  );
};

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  icon: {
    width: screenHeight * 0.22,
    height: screenHeight * 0.22,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  listContainer: {
    height: screenWidth * 0.23,
    width: screenWidth * 0.23,
    borderRadius: (screenWidth * 0.23) / 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    marginBottom: 12,
    marginLeft: 10,
  },
});

export default ChoisirPersonnage;
