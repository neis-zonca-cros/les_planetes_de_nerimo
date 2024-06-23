import { Platform, StyleSheet } from "react-native";

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23363E",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "center", 
 
  },

  titreLarge: {
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
  titreMedium: {
    alignItems: "center",
    justifyContent: "center", 
    textAlign: "center",
    fontFamily: "brotherBold",
    paddingBottom:20,
    fontSize: 30,
    lineHeight: 50,
    color: "#FAE6BB",
    textTransform: "uppercase",
    
    
  },
  titreSmall : {
    textAlign: "center",
    fontFamily: "brotherBold",
    fontSize: 16,
    color: "#FAE6BB",
    textTransform: "uppercase",
    paddingVertical:10,

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
  iconeShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  textInput: {
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
        shadowColor: "rgba(0, 0, 0, 0.5)",
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
    fontFamily: "brotherBold",
    textTransform: "uppercase",
    fontSize: 15,
    color: "#FFAD80",
    paddingBottom: 10,
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
    backgroundColor: "#23363E",
  },
  textContainerTopBar:{
    flexDirection: "column",
    alignItems: "center",

  },
  titreLargeTopBar: {
    padding: 5,
    fontSize: 20,
    fontFamily: "brotherBold",
    color: "#FAE6BB",
    textTransform: "uppercase",
    textAlign:'center',
  },
  iconsTopBar: {
    flexDirection: "row",
  },
  iconTopBar: {
    color: "#FAE6BB",
    padding: 10,
  },
});
