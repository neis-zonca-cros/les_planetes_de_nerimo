import { Platform, StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAE6BB",
  },
  text: {
    textAlign: "center",
    fontFamily: "brother",
    fontSize: 24,
    color: "#23363E",
  },
  titre: {
    justifyContent: "flex-start",
    textAlign: "center",
    fontFamily: "brotherBold",
    fontSize: 50,
    color: "#23363E",
    textTransform: "uppercase",
    paddingVertical: 100,
    paddingHorizontal: 30,
    lineHeight: 80,
  },
  menu: {
    justifyContent: "flex-start",
    textAlign: "center",
    fontFamily: "brotherBold",
    fontSize: 40,
    color: "#23363E",
    textTransform: "uppercase",
    paddingVertical: 40,
  },
  iconeContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  iconeColor: {
    color: "#23363E",
  },
  textInput:{
    color: "#23363E",
    fontFamily: "brotherBold",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    fontSize: 20,

  },
  input: {
    height: 60,
    borderRadius: 10,
    borderColor: "#FAE6BB",
    backgroundColor: "#FAE6BB",
    borderWidth: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(205, 133, 63, 0.5)',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  errorText: {
    fontFamily:"brotherBold",
    textTransform: "uppercase",
    fontSize: 15,
    color: "#825C6E",
    paddingBottom:10,
  },

  iconeShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#23363E",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  containerTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FAE6BB",
  },
  titreTopBar: {
    padding: 10,
    fontSize: 20,
    color: "#23363E",
    fontFamily: "brother",
    textTransform: "uppercase",
  },
  iconsTopBar: {
    flexDirection: "row",
  },
  iconTopBar: {
    color: "#23363E",
    padding: 10,
  },

});
