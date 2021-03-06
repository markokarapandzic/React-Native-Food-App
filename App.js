import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'

const Navigator = createStackNavigator(
    {
        Search: SearchScreen,
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search',
        },
    }
)

export default createAppContainer(Navigator)
