import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "../screens/Home";
import NavigationBar from "./NavigationBar";
import Home from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import Map from '../screens/Map';
import Notifications from '../screens/Notifications';
import Explore from '../screens/Explore';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <NavigationBar {...props} />}
            sceneContainerStyle={{ backgroundColor: '#fff' }}
            
        >
            <Tab.Screen t name="Home" component={Home} />
            <Tab.Screen t name="Explore" component={Explore} />
            <Tab.Screen t name="Map" component={Map} />
            <Tab.Screen t name="Notifications" component={Notifications} />
            <Tab.Screen t name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}
