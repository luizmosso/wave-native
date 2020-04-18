import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions'
import { colors } from './content/theme'

import Main from './pages/Main';
import Families from './pages/Families';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main, Families
    },
    {
      headerLayoutPreset: 'center',
      headerMode: 'screen',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.blue,
          borderBottomWidth: 0
        },
        headerTintColor: colors.light
      },
      transitionConfig: (nav) => handleCustomTransition(nav)
    }
  )
);

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  if (prevScene
    && prevScene.route.routeName === 'Main'
    && nextScene.route.routeName === 'Families') {
    return zoomIn();
  } else if (prevScene
    && prevScene.route.routeName === 'Families'
    && nextScene.route.routeName === 'Main') {
    return zoomOut();
  }
  return fromLeft();
}

export default Routes;
