import {
  Animated,
  Easing,
  Platform
} from 'react-native'

import Welcome from './pages/welcome/Welcome.tsx'
import LoginWithUsername from './pages/login/Login.tsx'
import Main from './pages/Main/Main.tsx'

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './pages/login/Login';

console.disableYellowBox = true;//dont shows warnings

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [{ scaleY }]
  };
};

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  }
}

const navigator = createStackNavigator({
  SlideFromRight: { screen: LoginWithUsername },
  Login: { screen: Login },
  Welcome: { screen: Welcome },
  Main: { screen: Main }
},
  {
    initialRouteName: 'Welcome',
    headerMode: "none",
    mode: Platform.OS === "ios" ? "modal" : "card",
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      gesturesEnabled: false
    },
    gesturesEnabled: false,
    transitionConfig: TransitionConfiguration,
  })

const App = createAppContainer(navigator)

export default App