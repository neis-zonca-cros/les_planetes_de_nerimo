import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/app/hooks/themeContext";
import {
  getPersonnagesByPlanete,
  Personnage,
} from "@/app/services/creerSessionFetch";
import TopBar from "@/app/components/TopBar";
import { getPersonnageImageURI } from "@/app/components/imageSession";
import useGoBack from "@/app/navigation/useGoBack";
import { useSession } from "@/app/hooks/sessionContext";

type ChoisirPersonnageScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChoisirPersonnage"
>;

const ChoisirPersonnage: React.FC = () => {
  const navigation = useNavigation<ChoisirPersonnageScreenProp>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const { currentSession, createNewSession } = useSession();
  const [personnages, setPersonnages] = useState<Personnage[]>([]);
  const { prenom, planeteRef } = currentSession || {};

  useEffect(() => {
    const fetchPersonnages = async () => {
      try {
        if (planeteRef && typeof planeteRef === 'string') {
          const data = await getPersonnagesByPlanete(planeteRef);
          setPersonnages(data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des personnages:", error);
      }
    };
    fetchPersonnages();
  }, [planeteRef]);

  const handleSelectPersonnage = async (personnageId: string) => {
    try {
      const sauvegardeParDefaut = "oui";

      if (prenom && planeteRef && personnageId) {
        await createNewSession({
          prenom,
          sauvegarde: sauvegardeParDefaut,
          planeteRef, 
          personnageRef: personnageId,
        });

        navigation.navigate("AccueilApresConnexion", { refresh: true });
      } else {
        console.error(
          "Données de session manquantes :",
          prenom,
          sauvegardeParDefaut,
          planeteRef,
          personnageId
        );
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de la session :", error);
    }
  };

  const renderItem = ({ item }: { item: Personnage }) => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => handleSelectPersonnage(item._id)}
        style={{ alignItems: "center" }}
      >
        <View style={theme.listContainer}>
          <Image source={getPersonnageImageURI(item.nom)} style={styles.icon} />
          <Text style={theme.listText}>{item.nom}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={theme.container}>
      <TopBar
        titre="Choisir un"
        prenom="personnage"
        iconeGaucheNom="arrow-back-outline"
        iconeGaucheAction={goBack}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={() => navigation.navigate("AccueilApresConnexion", { refresh: true })}
      />
      <FlatList
        data={personnages}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.row}
      />
    </View>
  );
};

const { height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  icon: {
    width: screenHeight * 0.17,
    height: screenHeight * 0.17,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});

export default ChoisirPersonnage;
