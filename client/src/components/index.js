import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Homepage/index';
import Teacher from './TeacherProfile';

const NavigationStack = createStackNavigator({
  Home: {screen: Home},
  Teacher: {screen: Teacher},
});

const Routes = createAppContainer(NavigationStack);

export default Routes;
