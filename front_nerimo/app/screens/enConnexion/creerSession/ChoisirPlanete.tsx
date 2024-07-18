import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/themes/themeContext";
import { getPlanetes } from "@/app/fetchs/creerSessionFetch";
import { Planete } from "@/app/fetchs/creerSessionFetch";

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

  return (
    <View style={theme.container}>
      <Text style={theme.titreMedium}>Choisissez une planète :</Text>
      <FlatList
        data={planetes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectPlanete(item._id)}>
            <Text>{item.nom}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChoisirPlanete;
