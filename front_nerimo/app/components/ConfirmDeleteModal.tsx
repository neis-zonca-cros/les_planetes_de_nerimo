import { darkTheme } from "@/app/themes/dark";
import { useTheme } from "@/app/hooks/themeContext";
import React, { forwardRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { OuiIcon } from "@/app/assets/icons/ouiIcon";
import { NonIcon } from "@/app/assets/icons/nonIcon";
import { ThemedStyles } from "../utils/styles";

interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  sessionName: string;
}

const ConfirmDeleteModal = forwardRef<Modalize, ConfirmationModalProps>(
  ({ onConfirm, onCancel, sessionName }, ref) => {
    const { theme } = useTheme();
    const screenWidth = Dimensions.get("window").width;
    const styleTheme = ThemedStyles(theme);
    return (
      <Modalize ref={ref} adjustToContentHeight>
        <View style={[styles.containerModal, { backgroundColor: theme.colors.background }]}>
          <Text style={styleTheme.text}>
            Supprimer la session de {sessionName} ?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
              <View style={theme.colors.effectShadow}>
                <NonIcon
                  width={screenWidth * 0.22}
                  fill={theme.colors.primaryButton}
                  background={theme.colors.background}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <View style={theme.colors.effectShadow}>
                <OuiIcon
                  width={screenWidth * 0.22}
                  fill={theme.colors.secondaryButton}
                  background={theme.colors.background}
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
  containerModal: {
    padding: 20,
    alignItems: "center",
  },
});

export default ConfirmDeleteModal;
