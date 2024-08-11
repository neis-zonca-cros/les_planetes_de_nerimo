import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const mediumFontSize = RFValue(14)
const smallFontSize = RFValue(11)
const histoireFontSize = RFValue(12)
const xSmallFontSize = RFValue(7)
const { width: screenWidth, height: screenHeight} = Dimensions.get("window");


export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23363E",
  },
  containerModal: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#23363E",
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
    color: "#FAE6BB",
    textTransform: "uppercase",
    paddingBottom: 10,
    paddingTop: 10,
  },

  iconeContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 20,
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

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  textInput: {
    flex: 1,
    color: "#FAE6BB",
    textAlign:'center',
    fontFamily: "brotherBold",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    fontSize: smallFontSize,
  },
  input: {
    height: screenHeight*0.10,
    width: screenWidth*0.40,
    borderRadius: 10,
    borderColor: "#23363E",
    backgroundColor: "#23363E",
    borderWidth: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
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
    fontSize: xSmallFontSize,
    color: "#FFAD80",
    paddingBottom: 10,
  },

  listTextPlanete: {
    fontSize: mediumFontSize,
    color: '#FAE6BB',
    fontFamily: 'brotherBold',
    textTransform: 'uppercase',
    textAlign: "center",
    paddingVertical: 5,

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
  listText: {
    fontSize: smallFontSize,
    color: '#FAE6BB',
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
    justifyContent: 'center',
    height: screenWidth*0.23,
    width:screenWidth*0.23,
    borderRadius: (screenWidth*0.23)/2,  

    marginBottom: 12,
    paddingHorizontal: 8,
    alignItems: 'center', 
    borderWidth: 5,
    borderColor: "#23363E",
    backgroundColor: "#23363E",
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
  sessionText: {
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "brotherBold",
    color: "#FAE6BB",
    fontSize: mediumFontSize,
  },
  iconeSessions: {
    color: "#FAE6BB",
  },

    // Styles screens TopBar
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
    color: "#FAE6BB",
    fontFamily: "brotherBold",
    textAlign: "center",
  },
  iconsTopBar: {
    flexDirection: "row",
  },
  iconTopBar: {
    color: "#FAE6BB",
    paddingVertical: 2,
    paddingHorizontal:5,
  },

// Styles screens Profil
  containerProfilItems: {
    marginBottom:15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "60%",
    height: screenHeight*0.10,
    backgroundColor: "#23363E",
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
  textProfilItems: {
    fontSize: smallFontSize,
    color: "#FAE6BB",
    fontFamily: "brotherBold",
  },
  iconeProfilItems: {
    color: "#FAE6BB",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  switchTrackTrue:{
    color: 'rgba(250, 230, 187, 1)',
    
  },
  switchTrackFalse:{
    color: 'rgba(35,54,62, 0.1)',
    
  },
  switchThumbFalse:{
    color: 'rgba(35,54,62, 1)',
  },
  switchThumbTrue:{
    color: 'rgba(35,54,62, 1)',
  },

// Styles screens Histoire 
  imageHistoire: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  containerHistoire: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  containerHistoireSansImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#23363E",
  },
  textContainerHistoire: {
    padding: 10,
    backgroundColor: "#23363E",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textHistoire: {
    fontSize: histoireFontSize,
    lineHeight: screenHeight*0.045,
    textAlign: 'center',
    fontFamily: "brotherBold",
    color: "#FAE6BB"
  },
  choixHistoire: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  choixBouttonHistoire: {
    padding: 2,
    marginHorizontal: 5,
    marginBottom: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.3,
    borderWidth: 5,
    borderColor: "#23363E",
    backgroundColor: "#23363E",
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
  choixBouttonTexteHistoire: {    
    fontSize: histoireFontSize,
    fontFamily: "brotherBold",
    lineHeight: screenHeight*0.045,
    color: "#FAE6BB",
    textAlign: 'center',
  },
  
});
