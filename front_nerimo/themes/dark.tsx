import { Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const largeFontSize = RFValue(12)
const mediumFontSize = RFValue(10)
const smallFontSize = RFValue(9)
const xSmallFontSize = RFValue(7)

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 10,
  },

  iconeContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    padding: 30,
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
    color: "#FAE6BB",
    textAlign:'center',
    fontFamily: "brotherBold",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    fontSize: mediumFontSize,
  },
  input: {
    height: 40,
    width: '40%',
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

  listContainer:{
    width: 300,
    paddingVertical: 10,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
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
  listText: {
    fontSize: smallFontSize,
    color: '#FAE6BB',
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
  sessionText: {
    fontFamily: "brotherBold",
    color: "#FAE6BB",
    fontSize: largeFontSize,
    paddingLeft: 10,
    paddingBottom:2,
  },
  iconeSessions: {
    color: "#FAE6BB",
  },

  containerTopBar: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    zIndex: 1,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainerTopBar: {
    flexDirection: "column",
    alignItems: "center",
  },
  titreLargeTopBar: {
    paddingVertical: 2,
    paddingHorizontal:5,
    fontSize: largeFontSize,
    fontFamily: "brotherBold",
    color: "#FAE6BB",
    textAlign: "center",
  },
  iconsTopBar: {
    flexDirection: "row",
  },
  iconTopBar: {
    color: "#FAE6BB",
    padding: 10,
  },
});
