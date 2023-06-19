import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./components/navbar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
}

