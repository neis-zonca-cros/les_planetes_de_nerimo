import { darkTheme } from "@/themes/dark";
import { useTheme } from "@/themes/themeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SessionProps {
  prenom: string;
  textePlanet?: string;
  planeteNom?: string;
  textePersonnage?: string;
  personnageNom?: string;
  onPress?: () => void;
}

const Session: React.FC<SessionProps> = ({
  prenom,
  planeteNom,
  personnageNom,
  textePlanet = "est sur ",
  textePersonnage = "avec ",
  onPress,
}) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={theme.sessionCard} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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

export default Session;
