import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
    alignItems: "center"
  },
  wrapper: {
    alignItems: "center"
  },
  errorText: {
    color: "#ff0000"
  },
  button: {
    width: 280,
    height: 30,
    marginTop: 20,
    backgroundColor: "#0023ea",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 23
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    fontSize: 30
  },
  spinner: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  updatedTitle: {
    textAlign: "center",
    color: "#1f043d",
    fontSize: 13,
    marginBottom: 5,
    marginTop: 5,
    fontStyle: "italic",
  },
  searchWrapper: {
    alignSelf: "flex-start"
  },
  search: {
    margin: 12,
    color: "#666666"
  },
});
