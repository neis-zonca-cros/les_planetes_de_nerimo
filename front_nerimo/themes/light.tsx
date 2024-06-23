import { Platform, StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAE6BB",
  },
  titreLarge: {
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
  titreMedium: {
    justifyContent: "flex-start",
    textAlign: "center",
    fontFamily: "brotherBold",
    fontSize: 30,
    lineHeight: 50,
    color: "#23363E",
    textTransform: "uppercase",
    paddingVertical: 40,
  },
  titreSmall : {
    textAlign: "center",
    fontFamily: "brotherBold",
    fontSize: 16,
    color: "#23363E",
    textTransform: "uppercase",
    paddingVertical:10,

  },


  iconeContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  iconeColor: {
    color: "#23363E",
  },
  iconeShadow: {
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


  containerTopBar: {
    flexDirection: "row",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100, 
    zIndex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FAE6BB",
  },
  titreLargeTopBar: {
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
