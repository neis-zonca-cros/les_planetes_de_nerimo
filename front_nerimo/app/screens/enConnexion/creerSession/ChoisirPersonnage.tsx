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
        onPress={() => handleSelectPersonnage(item)}
        style={{ alignItems: "center" }}
      >
        <View style={[styles.listContainer, theme.colors.effectShadow, {backgroundColor: theme.colors.background, borderColor: theme.colors.background, paddingVertical: theme.paddingVerticalMedium, marginVertical: theme.paddingVerticalMedium}]}>
          <Image source={getPersonnageImageURI(item.nom)} style={styles.icon} />
          <Text style={[styles.listText, {fontFamily: theme.typographySize.medium.fontFamily, fontSize: theme.typographySize.medium.fontSize, color: theme.colors.text, paddingVertical: theme.paddingVerticalMedium}]}>{item.nom}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
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
  listContainer:{
    height: screenWidth*0.23,
    width:screenWidth*0.23,
    borderRadius: (screenWidth*0.23)/2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
  },
    listText: {
    textTransform: 'uppercase',
    textAlign: "center",
  },
});

export default ChoisirPersonnage;
