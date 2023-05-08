//Necessary Imports
import WelcomeScreen from "./screens/WelcomeScreen";
import ChatScreen from "./screens/ChatScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Creates stack to store the screens that will need to be displayed
const Stack = createNativeStackNavigator();

// Creates the main app function which will call on everything else
function App() {

    // Return call which displays the current screen at the top of the stack
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={WelcomeScreen}/>
                <Stack.Screen name="Chat" component={ChatScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Exports the App function so the app actually works
export default App;


