import { Platform, StyleSheet } from "react-native";

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23363E",
  },
  text: {
    textAlign: "center",
    fontFamily: "brother",
    fontSize: 24,
    color: "#FAE6BB",
  },
  titre: {
    justifyContent: "flex-start",
    textAlign: "center",
    fontFamily: "brotherBold",
    fontSize: 50,
    color: "#FAE6BB",
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
    color: "#FAE6BB",
    textTransform: "uppercase",
    paddingVertical: 40,
  },
  iconeContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: "#FAE6BB",
    padding: 10,
  },
  iconeColor: {
    color: "#FAE6BB",
  },

  textInput:{
    color: "#FAE6BB",
    fontFamily: "brotherBold",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    fontSize: 20,
    

   

  },
  input: {
    height: 60,
    borderRadius: 10,
    borderColor: "#23363E",
    backgroundColor: "#23363E",
    borderWidth: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.8,
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
    color: "#FFAD80",
    paddingBottom:10,
  },




  iconeShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
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
    backgroundColor: "#23363E",
  },
  titreTopBar: {
    padding: 10,
    fontSize: 20,
    fontFamily: "brother",
    color: "#FAE6BB",
    textTransform: "uppercase",
  },
  iconsTopBar: {
    flexDirection: "row",
  },
  iconTopBar: {
    color: "#FAE6BB",
    padding: 10,
  },
});
