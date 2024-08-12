import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { Dimensions, Image, StyleSheet, ImageBackground } from "react-native";

type BienvenueScreen = StackNavigationProp<RootStackParamList, "Bienvenue">;

const Bienvenue: React.FC = () => {
  const navigation = useNavigation<BienvenueScreen>();
  const { theme } = useTheme();
  const screenHeight = Dimensions.get("window").height;
  const maxSize = 150;
  const iconSize = Math.min(screenHeight * 0.2, maxSize);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <TopBar titre="Bienvenue sur les" prenom="planètes de Nérimo !" />
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require("@/app/assets/images/planete_nerimo.gif")}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("AccueilAvantConnexion")}
        style={styles.iconButton}
      >
        <View style={theme.colors.effectShadow}>
          <Ionicons
            name="arrow-forward-circle"
            size={iconSize}
            color={theme.colors.neutralButton}
          />
        </View>
      </TouchableOpacity>
    </View>
  );



};

export default Bienvenue;

const { height: screenHeight } = Dimensions.get("window");
const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: screenHeight * 0.7,
    height: screenHeight * 0.7,
    resizeMode: "contain",
    marginBottom: 20,
  },
  iconButton: {
    position: "absolute",
    paddingTop: 20,
    bottom: 20,
    alignSelf: "center",
  },
});
