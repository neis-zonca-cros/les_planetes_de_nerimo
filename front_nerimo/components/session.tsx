import { darkTheme } from "@/themes/dark";
import { useTheme } from "@/themes/themeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


interface SessionProps {
  prenom: string;
  textePlanet?: string;
  planeteNom?: string;
  textePersonnage?: string;
  personnageNom?: string;
  imageSource?: ReturnType<typeof require>; 
  onPress?: () => void;
}

const SessionComposant: React.FC<SessionProps> = ({
  
  prenom,
  planeteNom,
  personnageNom,
  textePlanet = "est sur ",
  textePersonnage = "avec ",
  imageSource,
  onPress,
}) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={theme.sessionCard} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
          name="arrow-forward-outline"
          size={24}
          color={theme === darkTheme ? "#FAE6BB" : "#23363E"}
          style={{ marginLeft: "auto" }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SessionComposant;

const styles = StyleSheet.create({
  roundImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    resizeMode: "contain",
    marginHorizontal:10,
  },
});