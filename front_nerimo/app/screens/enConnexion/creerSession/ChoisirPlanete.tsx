import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/themes/themeContext";
import { getPlanetes } from "@/app/fetchs/creerSessionFetch";
import { Planete } from "@/app/fetchs/creerSessionFetch";
import TopBar from "@/components/navigation/TopBar";
import { getPlaneteImageURI } from "@/components/imageSession";

type ChoisirPlaneteScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChoisirPlanete"
>;

const ChoisirPlanete: React.FC = () => {
  const navigation = useNavigation<ChoisirPlaneteScreenProp>();
  const route = useRoute<RouteProp<RootStackParamList, "ChoisirPlanete">>();
  const { theme } = useTheme();
  const prenom = route.params?.prenom;

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
    navigation.navigate("ChoisirPersonnage", { prenom, planeteId });
  };

  const renderItem = ({ item }: { item: Planete }) => (
    <TouchableOpacity onPress={() => handleSelectPlanete(item._id)} style={{alignItems:'center'}}>
      <View style={theme.listContainer}>
        <Image
          source={getPlaneteImageURI(item.nom)}
          style={styles.icon}
        />
        <Text style={theme.listText}>{item.nom}</Text>
      </View>
    </TouchableOpacity>
  );

  
    return (
      <View style={theme.container}>
        <TopBar
          titre="Choisir une"
          prenom="planète"
          iconeDroiteNom="planet-outline"
          iconeDroiteAction={() => navigation.navigate("MenuUtilisateur")}
        />
        
        <FlatList
          data={planetes}
          keyExtractor={(item) => item._id}
          ListHeaderComponent={() => (
            <Text style={theme.titreMedium}>Sur quelle planète veux-tu aller ?</Text>
          )}
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
export default ChoisirPlanete;
