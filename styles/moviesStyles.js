import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  movieThumbnail: {
    flex: 1,
    height: 200,
    marginBottom: 10
  },
  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    marginBottom: 10
  },
  image: {
    flex: 1,
    width: "100%"
  },
  movieDetails: {
    flex: 1,
    margin: 10,
    alignItems: "center"
  },
  year: {
    color: "#868889",
    alignSelf: "flex-start"
  }
});
