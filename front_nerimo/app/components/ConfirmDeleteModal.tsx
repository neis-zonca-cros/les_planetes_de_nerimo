import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { OuiIcon } from "@/app/assets/icons/ouiIcon";
import { NonIcon } from "@/app/assets/icons/nonIcon";
import { ThemedStyles } from "../utils/styles";
import { useTheme } from "../hooks/themeContext";
import Modal from "react-native-modal";


interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  sessionName: string;
  visible: boolean;
  onRequestClose: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmationModalProps> = ({
  onConfirm,
  onCancel,
  sessionName,
  visible,
  onRequestClose,
}) => {
  const { theme } = useTheme();
  const screenWidth = Dimensions.get("window").width;
  const styleTheme = ThemedStyles(theme);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onRequestClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      coverScreen={false}
      hasBackdrop={true}
      backdropColor="transparent"
      backdropOpacity={0}
    >
      <TouchableOpacity style={styles.overlay} onPress={onRequestClose}>
        <View
          style={[
            styles.containerModal,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <Text style={styleTheme.text}>
            Supprimer la session de {sessionName} ?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
              <NonIcon
                width={screenWidth * 0.22}
                fill={theme.colors.primaryButton}
                background={theme.colors.background}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <OuiIcon
                width={screenWidth * 0.22}
                fill={theme.colors.secondaryButton}
                background={theme.colors.background}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    width: '100%',
    paddingTop: 20,
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
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ConfirmDeleteModal;
