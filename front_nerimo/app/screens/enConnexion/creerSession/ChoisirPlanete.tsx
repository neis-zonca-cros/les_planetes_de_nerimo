import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/app/hooks/themeContext";
import { getPlanetes } from "@/app/services/creerSessionFetch";
import { Planete } from "@/app/services/creerSessionFetch";
import TopBar from "@/app/components/TopBar";
import { getPlaneteImageURI } from "@/app/components/imageSession";
import useGoBack from "@/app/navigation/useGoBack";
import { useSession } from "@/app/hooks/sessionContext";

type ChoisirPlaneteScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChoisirPlanete"
>;

const ChoisirPlanete: React.FC = () => {
  const navigation = useNavigation<ChoisirPlaneteScreenProp>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const { setCurrentSession } = useSession(); 
  const [planetes, setPlanetes] = useState<Planete[]>([]);

  useEffect(() => {
    const fetchPlanetes = async () => {
      try {
        const data = await getPlanetes();
        setPlanetes(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des planètes:", error);
      }
    };
    fetchPlanetes();
  }, []);

  const handleSelectPlanete = (planeteId: string) => {
    setCurrentSession(prev => ({
      ...prev,
      planeteRef: planeteId
    }));
    navigation.navigate("ChoisirPersonnage");
  };

  const renderItem = ({ item }: { item: Planete }) => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => handleSelectPlanete(item._id)}>
        <View style={theme.listContainer}>
          <Image source={getPlaneteImageURI(item.nom)} style={styles.icon} />
          <Text style={theme.listTextPlanete}>{item.nom}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={theme.container}>
      <TopBar
        titre="Choisir une"
        prenom="planète"
        iconeGaucheNom="arrow-back-outline"
        iconeGaucheAction={goBack}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={() => navigation.navigate("AccueilApresConnexion", { refresh: true })}
      />

      <FlatList
        data={planetes}
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
});

export default ChoisirPlanete;
