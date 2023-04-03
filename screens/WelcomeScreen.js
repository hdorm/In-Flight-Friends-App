import {StyleSheet, Text, View, Image} from "react-native";
import {StatusBar} from "expo-status-bar";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ContinueButton from "../ContinueButton";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Creates an array that points to the emoji images
const emojiImages = [
    {image: require('../images/awesome.png')},
    {image: require('../images/beaver.png')},
    {image: require('../images/chipmunk.png')},
    {image: require('../images/clown.png')},
    {image: require('../images/cold.png')},
    {image: require('../images/cool.png')},
    {image: require('../images/cowboy.png')},
    {image: require('../images/elf.png')},
    {image: require('../images/ghost.png')},
    {image: require('../images/groucho.png')},
    {image: require('../images/nerd.png')},
    {image: require('../images/ninja.png')},
    {image: require('../images/oops.png')},
    {image: require('../images/panda.png')},
    {image: require('../images/rabbit.png')},
    {image: require('../images/smiling.png')},
    {image: require('../images/strong.png')},
    {image: require('../images/unicorn.png')},
    {image: require('../images/vampire.png')},
    {image: require('../images/wizard.png')},
    {image: require('../images/woozy.png')},
    {image: require('../images/zombie.png')}
]

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.frontPage}>
            <Text style={styles.titleText}>Welcome</Text>
            <Text style={styles.selectText}>Select an emoji</Text>
            <StatusBar style="auto"/>
            <SelectDropdown
                data={emojiImages}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                disableAutoScroll={true}
                buttonStyle={styles.dropdownButton}
                renderCustomizedButtonChild={(selectedItem) => {
                    return (
                        <View style={styles.dropdownButtonChildStyle}>
                            {selectedItem ? (
                                <Image source={selectedItem.image} style={styles.dropdownButtonImage}/>
                            ) : (
                                <Text> </Text>
                            )}
                        </View>
                    );
                }}
                renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18}/>;
                }}
                dropdownStyle={styles.dropdownButtonStyle}
                rowStyle={styles.dropdownButtonRowStyle}
                renderCustomizedRowChild={(item) => {
                    return (
                        <View style={styles.dropdownButtonRowChildStyle}>
                            <Image source={item.image} style={styles.dropdownButtonRowImage}/>
                        </View>
                    );
                }}
            />
            {/* <TouchableOpacity
            //Implement the button functionality
                style={styles.continueButton}
                onPress={() => Alert.alert('Continue button pressed')}
                underlayColor='white'>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity> */}
            <ContinueButton
                title="Continue"
                onPress={() => navigation.navigate('Chat')}
            />
            <Text style={styles.footerText}> All emojis designed by OpenMoji – the open-source emoji and icon project.
                License: CC BY-SA 4.0 </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    frontPage: {
        flex: 1,
        backgroundColor: '#003268',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 65,
        fontWeight: "normal",
        color: 'white',
        top: '25%'
    },
    selectText: {
        fontSize: 25,
        fontWeight: "300",
        color: 'white',
        top: '30%'
    },
    dropdownButton: {
        width: 100,
        height: 30,
        borderRadius: 15,
        top: '60%'
    },
    dropdownButtonChildStyle: {
        alignItems: 'center'
    },
    dropdownButtonStyle: {
        borderRadius: 12
    },
    dropdownButtonImage: {
        width: 30,
        height: 30
    },
    dropdownButtonRowStyle: {
        backgroundColor: 'white',
        borderBottomColor: '#444',
        height: 40
    },
    dropdownButtonRowChildStyle: {
        paddingLeft: 26
    },
    dropdownButtonRowImage: {
        width: 30,
        height: 30,
        resizeMode: 'center'
    },
    footerText: {
        fontSize: 10,
        textAlign: "center",
        color: "white",
        top: "67%"
    }
});

export default WelcomeScreen;