import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const mediumFontSize = RFValue(14)
const smallFontSize = RFValue(11)
const xSmallFontSize = RFValue(7)
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");




export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAE6BB",
  },
  containerModal: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FAE6BB",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  scrollViewContentForSession: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 110,
  },

  titreSmall: {
    textAlign: "center",
    fontFamily: "brotherBold",
    fontSize: smallFontSize,
    color: "#23363E",
    textTransform: "uppercase",
    paddingBottom: 20,
    paddingTop: 10,
  },

  iconeContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 20,
  },
  iconeColor: {
    color: "#23363E",
  },
  iconeShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "rgba(205, 133, 63, 0.5)",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  textInput: {
    flex: 1,
    color: "#23363E",
    fontFamily: "brotherBold",
    textAlign:'center',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    fontSize: mediumFontSize,
  },
  input: {
    height: screenHeight*0.12,
    width: screenWidth*0.40,
    borderRadius: 10,
    borderColor: "#FAE6BB",
    backgroundColor: "#FAE6BB",
    borderWidth: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(205, 133, 63, 0.5)",
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
    fontFamily: "brotherBold",
    textTransform: "uppercase",
    fontSize: xSmallFontSize,
    color: "#825C6E",
    paddingBottom: 10,
  },

  listContainer:{
    height: screenWidth*0.23,
    width:screenWidth*0.23,
    borderRadius: (screenWidth*0.23)/2,
    paddingVertical: 10,
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#FAE6BB",
    backgroundColor: "#FAE6BB",
    borderWidth: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(205, 133, 63, 0.5)",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),

  },
  listText: {
    fontSize: smallFontSize,
    color: '#23363E',
    fontFamily: 'brotherBold',
    textTransform: 'uppercase',
    textAlign: "center",
    paddingTop: 10,
  },

  sessionContainer: {
    flexDirection: "column",
    textAlign:"center",
    paddingVertical:5,
  },
  sessionCard: {
    borderColor: "#FAE6BB",
    backgroundColor: "#FAE6BB",
    justifyContent: 'center',
    height: screenWidth*0.23,
    width:screenWidth*0.23,
    borderRadius: (screenWidth*0.23)/2,  
    borderWidth: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    alignItems: 'center', 
    ...Platform.select({
      ios: {
        shadowColor: "rgba(205, 133, 63, 0.5)",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  sessionText: {
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "brotherBold",
    color: "#23363E",
    fontSize: mediumFontSize,  
  },
  iconeSessions: {
    color: "#23363E",
  },

  containerTopBar: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    zIndex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:16,
    marginVertical: 15,
  },
  textContainerTopBar: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop:10,
  },
  titreLargeTopBar: {
    paddingVertical: 2,
    paddingHorizontal:5,
    fontSize: mediumFontSize,
    color: "#23363E",
    fontFamily: "brotherBold",
    textAlign: "center",
  },
  iconsTopBar: {
    flexDirection: "row",
  },
  iconTopBar: {
    color: "#23363E",
    paddingVertical: 2,
    paddingHorizontal:5,
  },

  containerProfilItems: {
    marginBottom:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAE6BB",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "60%",
    ...Platform.select({
      ios: {
        shadowColor: "rgba(205, 133, 63, 0.5)",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  textProfilItems: {
    fontSize: mediumFontSize,
    color: "#23363E",
    fontFamily: "brotherBold",
    paddingTop: 10,
  },
  iconeProfilItems: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
