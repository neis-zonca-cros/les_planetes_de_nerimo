import { darkTheme } from "@/themes/dark";
import { useTheme } from "@/themes/themeContext";
import React, { forwardRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { OuiIcon } from "@/themes/icones/ouiIcon";
import { NonIcon } from "@/themes/icones/nonIcon";

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  sessionName: string;
}

const ConfirmDeleteModal = forwardRef<Modalize, ConfirmationModalProps>(
  ({ onConfirm, onCancel, sessionName }, ref) => {
    const { theme } = useTheme();
    const screenWidth = Dimensions.get("window").width;
    return (
      <Modalize ref={ref} adjustToContentHeight>
        <View style={theme.containerModal}>
          <Text style={theme.sessionText}>
            Supprimer la session de {sessionName} ?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
              <View style={theme.iconeShadow}>
                <NonIcon
                  width={screenWidth * 0.2}
                  fill={theme === darkTheme ? "#FFCD69" : "#825C6E"}
                  background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <View style={theme.iconeShadow}>
                <OuiIcon
                  width={screenWidth * 0.2}
                  fill={theme === darkTheme ? "#FFAD80" : "#E7A74F"}
                  background={theme === darkTheme ? "#23363E" : "#FAE6BB"}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#23363E",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
  },
  button: {
    alignItems: "center",
    padding: 15,
  },
});

export default ConfirmDeleteModal;
