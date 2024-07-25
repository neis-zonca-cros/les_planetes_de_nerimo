import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const largeFontSize = RFValue(12)
const mediumFontSize = RFValue(10)
const smallFontSize = RFValue(9)
const xSmallFontSize = RFValue(7)



export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 10,
  },

  iconeContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    padding: 30,
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
    color: "#23363E",
    fontFamily: "brotherBold",
    textAlign:'center',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    fontSize: mediumFontSize,
  },
  input: {
    height: 40,
    width: '40%',
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
    width: 300,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 50,
    height: 80,
    borderRadius: 10,
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

  },

  sessionContainer: {
    flexDirection: "column",
  },
  sessionCard: {
    justifyContent: "center",
    height: 100,
    borderRadius: 10,
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
  sessionText: {
    fontFamily: "brotherBold",
    color: "#23363E",
    fontSize: largeFontSize,
    paddingLeft: 10,
    paddingBottom:2,
  
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
    paddingHorizontal: 16,
  },
  textContainerTopBar: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,

  },
  titreLargeTopBar: {
    paddingVertical: 2,
    paddingHorizontal:5,
    fontSize: largeFontSize,
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
});
