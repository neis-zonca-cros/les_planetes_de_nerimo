import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { useTheme } from "@/themes/themeContext";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "@/components/navigation/TopBar";

type AccueilApresConnexionScreen = StackNavigationProp<
  RootStackParamList,
  "AccueilApresConnexion"
>;

const AccueilApresConnexion: React.FC = () => {
  const navigation = useNavigation<AccueilApresConnexionScreen>();
  const { theme } = useTheme();
  const longText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar, enim et pellentesque luctus, velit elit consectetur lacus, eget aliquam odio nisi sed arcu. Cras ac enim lacus. Proin convallis auctor varius. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut rhoncus ultricies augue, ac feugiat nisl. Curabitur vel volutpat enim. Donec pharetra augue eget sapien laoreet, quis tincidunt nisi ultricies. Suspendisse potenti. Nulla ut mi a leo ultrices ultrices non at orci. Morbi vitae turpis fermentum, tempor purus sed, tempor quam.

    Vivamus eget tortor a ante efficitur vestibulum ac sit amet elit. Sed efficitur dui a convallis luctus. Sed sit amet nisl vel nisi efficitur maximus. Mauris auctor lacus id ligula tempor venenatis. Cras sollicitudin ligula nec libero tincidunt, sed iaculis felis feugiat. Quisque vel nunc ipsum. Sed ac vehicula leo, sit amet ultricies neque. Quisque vel eros tincidunt, convallis justo ac, euismod mi.

    Fusce vel orci risus. Proin tincidunt, nisi et vehicula egestas, orci velit tempor ex, id volutpat orci nunc non ex. Donec elementum at orci ut fermentum. Mauris nec ante eget justo ullamcorper vehicula. Vestibulum rutrum tempus sem, nec fermentum ipsum. Duis varius odio vel magna efficitur, eget eleifend neque tempor. Aliquam ullamcorper aliquet odio vel tincidunt. Sed a metus urna. Integer dictum ligula nisl, ac lobortis sem lacinia ut. Aliquam id lacinia felis. Phasellus at metus vel urna gravida tempus.

    Quisque rutrum efficitur eros, eu posuere elit tincidunt nec. Vestibulum tincidunt nibh a orci eleifend, sit amet convallis felis vehicula. Maecenas vel urna in lectus tincidunt bibendum at sed nulla. Integer lobortis lectus id tellus rutrum egestas. Integer a orci in nisi pellentesque tincidunt. Duis ultricies orci eget neque dictum tincidunt. Etiam non tortor ac sapien tristique rhoncus. Nullam in lorem vitae ligula consequat consectetur vel et lorem.

    Sed egestas lorem vitae urna hendrerit, non interdum ex consequat. Pellentesque euismod mi vel laoreet suscipit. Fusce vel dapibus risus. Nullam fringilla sapien in tellus egestas, vel dictum tortor gravida. Donec vel lacinia velit, quis dapibus dolor. Fusce accumsan sem a mi maximus, ac lacinia quam consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non fermentum turpis. Integer quis varius odio. Aliquam erat volutpat. Mauris ultrices lectus eget leo congue consequat.
      Sed egestas lorem vitae urna hendrerit, non interdum ex consequat. Pellentesque euismod mi vel laoreet suscipit. Fusce vel dapibus risus. Nullam fringilla sapien in tellus egestas, vel dictum tortor gravida. Donec vel lacinia velit, quis dapibus dolor. Fusce accumsan sem a mi maximus, ac lacinia quam consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras non fermentum turpis. Integer quis varius odio. Aliquam erat volutpat. Mauris ultrices lectus eget leo congue consequat.
`;
  return (
    <View style={theme.container}>
      <TopBar
        titre="Bienvenue"
        prenom="Mokala"
        iconeDroiteNom="planet-outline"
      />
      <ScrollView contentContainerStyle={theme.scrollViewContent}>
        <View>
          <Text style={theme.titreMedium}>{longText}</Text>
        </View>
      </ScrollView>
    </View>
  );
};


export default AccueilApresConnexion;
