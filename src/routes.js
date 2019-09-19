import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from './pages/Splash';
import Onboard from './pages/Onboard';
import Login from './pages/Login';
import Main from './pages/Main';

const Routes = createAppContainer(
  createSwitchNavigator({
    Splash,
    Onboard,
    Login,
    Main,
  })
);

export default Routes;
