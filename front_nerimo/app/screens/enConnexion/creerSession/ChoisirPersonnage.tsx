import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/themes/themeContext";
import { createSession, getPersonnagesByPlanete, Personnage } from "@/app/fetchs/creerSessionFetch";
import TopBar from "@/components/navigation/TopBar";
import { getPersonnageImageURI } from "@/components/imageSession";

type ChoisirPersonnageScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChoisirPersonnage"
>;

const ChoisirPersonnage: React.FC = () => {
  const navigation = useNavigation<ChoisirPersonnageScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, "ChoisirPersonnage">>();
  const { theme } = useTheme();
  const prenom = route.params?.prenom;
  const planeteId = route.params?.planeteId;

  const [personnages, setPersonnages] = useState<Personnage[]>([]);

  useEffect(() => {
    const fetchPersonnages = async () => {
      try {
        if (planeteId) {
          const data = await getPersonnagesByPlanete(planeteId);
          setPersonnages(data);
          console.log(planeteId);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des personnages:", error);
      }
    };
    fetchPersonnages();
  }, [planeteId]);

  const handleSelectPersonnage = async (personnageId: string) => {
    try {
      const sauvegardeParDefaut = "oui";

      if (prenom && planeteId && personnageId) {
        await createSession({
          prenom,
          sauvegarde: sauvegardeParDefaut,
          planeteRef: planeteId,
          personnageRef: personnageId,
        });

        navigation.navigate("AccueilApresConnexion", { refresh: true });
      } else {
        console.error(
          "Données de session manquantes :",
          prenom,
          sauvegardeParDefaut,
          planeteId,
          personnageId
        );
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de la session :", error);
    }
  };

  const renderItem = ({ item }: { item: Personnage }) => (
    <TouchableOpacity onPress={() => handleSelectPersonnage(item._id)} style={{alignItems:'center'}}>
      <View style={theme.listContainer}>
        <Image
          source={getPersonnageImageURI(item.nom)}
          style={styles.icon}
        />
        <Text style={theme.listText}>{item.nom}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={theme.container}>
      <TopBar
        titre="Choisir un"
        prenom="personnage"
        iconeDroiteNom="planet-outline"
        iconeDroiteAction={() => navigation.navigate("MenuUtilisateur")}
      />
      <FlatList
        data={personnages}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={theme.scrollViewContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
    resizeMode: 'contain',
  },
});

export default ChoisirPersonnage;
