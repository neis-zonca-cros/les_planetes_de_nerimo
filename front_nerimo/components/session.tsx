import { darkTheme } from "@/themes/dark";
import { useTheme } from "@/themes/themeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SessionProps {
  prenom: string;
  textePlanet?: string;
  planeteNom?: string;
  textePersonnage?: string;
  personnageNom?: string;
  imageSource?: ReturnType<typeof require>; 
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
}

const SessionComposant: React.FC<SessionProps> = ({
  prenom,
  planeteNom,
  personnageNom,
  textePlanet = "est sur ",
  textePersonnage = "avec ",
  imageSource,
  onPress,
  icon = "play-outline",
}) => {
  const { theme } = useTheme();
  const { height: screenHeight } = Dimensions.get("window");

  return (
    <TouchableOpacity onPress={onPress} style={theme.sessionCard}>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent:"center" }}>
        {imageSource && (
          <Image source={imageSource} style={styles.roundImage} />
        )}
        <View style={theme.sessionContainer}>
          <Text style={theme.sessionText}>{prenom}</Text>
          <Text style={theme.sessionText}>
            {textePlanet}
            {planeteNom}
          </Text>
          <Text style={theme.sessionText}>
            {textePersonnage}
            {personnageNom}
          </Text>
        </View>
        <Ionicons
          name={icon} 
          size={screenHeight * 0.060}
          color={theme === darkTheme ? "#FAE6BB" : "#23363E"}
          style={{ alignItems:"center", justifyContent:"center", paddingVertical: 1 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SessionComposant;

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
  roundImage: {
    height: screenHeight * 0.10,
    width: screenWidth * 0.10,
    resizeMode: "contain",
    marginHorizontal: 10,
    alignItems: 'center', 
    justifyContent: 'center',
    marginVertical: 10,
  },
});
