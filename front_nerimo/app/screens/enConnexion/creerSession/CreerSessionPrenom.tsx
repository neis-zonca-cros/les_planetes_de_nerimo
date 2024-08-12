import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/types";
import { useTheme } from "@/app/hooks/themeContext";
import TopBar from "@/app/components/TopBar";
import { darkTheme } from "@/app/themes/dark";
import { Ionicons } from "@expo/vector-icons";
import useGoBack from "@/app/navigation/useGoBack";
import { useSession } from "@/app/hooks/sessionContext";

type CreerSessionPrenomScreenProp = StackNavigationProp<
  RootStackParamList,
  "CreerSessionPrenom"
>;

const CreerSessionPrenom: React.FC = () => {
  const navigation = useNavigation<CreerSessionPrenomScreenProp>();
  const { theme } = useTheme();
  const goBack = useGoBack();
  const { setCurrentSession } = useSession();
  const [prenom, setPrenom] = useState("");
  const screenHeight = Dimensions.get("window").height;
  const maxSize = 150; 
  const iconSize = Math.min(screenHeight * 0.20, maxSize);

  const handleNext = () => {
    if (prenom) {
      setCurrentSession(prev => ({
        ...prev,
        prenom
      }));
      navigation.navigate("ChoisirPlanete");
    } else {
      alert("Veuillez entrer un prénom.");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <TopBar
        titre="Créer une"
        prenom="session"
        iconeGaucheNom="arrow-back-outline"
        iconeGaucheAction={goBack}
        iconeDroiteNom="close-outline"
        iconeDroiteAction={() => navigation.navigate("AccueilApresConnexion", { refresh: true })}
      />

      <View style={styles.bottomIconsContainer}>
        <View style={[
                    styles.input,
                    theme.colors.effectShadow,
                    { backgroundColor: theme.colors.background, borderColor: theme.colors.background }
                  ]}>
          <TextInput
                                  style={[
                                    styles.textInput,
                                    { fontSize: theme.typographySize.medium.fontSize, fontFamily: theme.typographySize.medium.fontFamily, color: theme.colors.text, paddingVertical: theme.paddingVerticalSmall }
                                  ]}
            value={prenom}
            onChangeText={setPrenom}
            placeholder="Écris ton surnom ici"
            placeholderTextColor={theme === darkTheme ? "#FAE6BB" : "#23363E"}
          />
        </View>
        <View style={styles.iconeContainer}>
          <TouchableOpacity onPress={handleNext}>
            <View style={theme.colors.effectShadow}>
              <Ionicons
                name="arrow-forward-circle"
                size={iconSize}
                color= {theme.colors.neutralButton}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  bottomIconsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    paddingVertical: 5,
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: screenHeight * 0.10,
    width: screenWidth * 0.40,
    borderRadius: 10,
    borderWidth: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  iconeContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 20,
  },
});

export default CreerSessionPrenom;
