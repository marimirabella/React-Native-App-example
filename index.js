import { AppRegistry } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { name as appName } from "./app.json";
import Feed from "./components/Feed";
import MediaScreen from "./components/MediaScreen";
import MovieDetails from "./components/MovieDetails";

const FeedStack = createStackNavigator(
  {
    Feed: Feed,
    Movie: MovieDetails
  },
  {
    mode: "modal"
  }
);

const MediaStack = createStackNavigator({
  Media: MediaScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Feed: FeedStack,
    Media: MediaStack
  },
  {
    tabBarOptions: {
      activeTintColor: "#0066FF",
      inactiveTintColor: "#666666"
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

AppRegistry.registerComponent(appName, () => AppContainer);
