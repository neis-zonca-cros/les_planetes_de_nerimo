import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import {
  RouteProp,
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useTheme } from "@/themes/themeContext";
import {
  createSession,
  getPersonnagesByPlanete,
  Personnage,
} from "@/app/fetchs/creerSessionFetch";

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

  return (
    <View style={theme.container}>
      <Text style={theme.titreMedium}>Choisissez un personnage :</Text>
      <FlatList
        data={personnages}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectPersonnage(item._id)}>
            <Text>{item.nom}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChoisirPersonnage;
