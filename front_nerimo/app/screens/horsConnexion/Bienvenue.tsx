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
  const iconSize = Math.min(screenHeight * 0.20, maxSize);

  return (
    <View style={[theme.container]}>
      {/* <ImageBackground source={require('@/app/assets/images/chambr.jpg')} style={styles.backgroundImage}></ImageBackground> */}
      <TopBar titre="Bienvenue sur les" prenom="planètes de Nérimo !" />
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require('@/app/assets/images/nerimo.gif')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("AccueilAvantConnexion")}
        style={styles.iconButton}
      >
        <View style={theme.iconeShadow}>
          <Ionicons
            name="arrow-forward-circle"
            size={iconSize}
            style={theme.iconeColor}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Bienvenue;

const { height: screenHeight } = Dimensions.get("window");
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  contentContainer: {
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenHeight * 0.7,
    height: screenHeight * 0.7,
    resizeMode: "contain",
    marginBottom: 20,
  },
  iconButton: {
    position: 'absolute',
    paddingTop: 20,
    bottom: 20,
    alignSelf: 'center',
  }
});
