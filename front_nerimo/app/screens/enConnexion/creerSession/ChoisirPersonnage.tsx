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
import { ThemedStyles } from "@/app/utils/styles";

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
  const styleTheme = ThemedStyles(theme);

  const prenom = currentSession?.prenom || "";
  const planeteRef = currentSession?.planeteRef || "";

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

  const handleSelectPersonnage = async (personnage: Personnage) => {
    try {
      const sauvegardeParDefaut = "oui";

      if (prenom && planeteRef && personnage._id) {
        await createNewSession({
          prenom,
          sauvegarde: sauvegardeParDefaut,
          planeteRef, 
          personnageRef: personnage._id,
        });
        navigation.navigate("Histoire", { histoire: personnage.histoire, personnageNom: personnage.nom, sessionPrenom: prenom});
      } else {
        console.error(
          "Données de session manquantes :",
          prenom,
          sauvegardeParDefaut,
          planeteRef,
          personnage._id
        );
      }
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de la session :", error);
    }
  };

  const renderItem = ({ item }: { item: Personnage }) => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => handleSelectPersonnage(item)}>
        <View style={[styles.listContainer, theme.colors.effectShadow, {backgroundColor: theme.colors.background, borderColor: theme.colors.background}]}>
          <Image source={getPersonnageImageURI(item.nom)} style={styles.icon} />
          <Text style={styleTheme.text}>{item.nom}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styleTheme.container}>
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

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  icon: {
    width: screenHeight * 0.22,
    height: screenHeight * 0.22,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  listContainer:{
    height: screenWidth*0.23,
    width:screenWidth*0.23,
    borderRadius: (screenWidth*0.23)/2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    marginBottom: 12,
    marginLeft: 10,
  },
});

export default ChoisirPersonnage;
