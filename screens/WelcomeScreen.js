//Necessary Imports
import {StyleSheet, Text, View, Image, Modal, Pressable} from "react-native";
import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ContinueButton from "../ContinueButton";
import {writeUserData} from "../Firebase.js";

// Creates an array that points to the avatar images
const avatarImages = [
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
    {image: require('../images/zombie.png')},
    {image: require('../images/game.png')},
    {image: require('../images/eightball.png')},
    {image: require('../images/floppydisk.png')},
    {image: require('../images/coolsquare.png')},
    {image: require('../images/globe.png')},
    {image: require('../images/pepper.png')},
    {image: require('../images/bluewhale.png')},
    {image: require('../images/crab.png')},
    {image: require('../images/snowman.png')},
    {image: require('../images/yinyang.png')},
    {image: require('../images/radioactive.png')},
    {image: require('../images/killerwhale.png')}
]

// Function that contains all the elements and functions of the welcome screen
function WelcomeScreen({navigation}) {

    // Gets called when a user selects an emoji and writes the selected emoji to the database
    const handleSelect = (selectedItem) => {
        // Calls function from Firebase.js which stores the user's avatar
        writeUserData(avatarImages[avatarImages.indexOf(selectedItem)].image);
    };

    // Gets called when the user presses the continue button and adds the chat screen to the stack and displays it
    const handleContinue = () => {
        navigation.navigate('Chat');
    };

    // Creates const to hold the current state of the modal displaying the terms of service
    const [modalVisible, setModalVisible] = useState(true);

    // Return statement which holds all the elements of the welcome screen
    return (
        <View style={styles.frontPage}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitleText}>Terms of Service</Text>
                    <Text style={styles.modalText}>1. No swearing or harmful language</Text>
                    <Text style={styles.modalText}>2. Do not reveal personal info</Text>
                    <Text style={styles.modalText}>3. Do not attempt to hack the app</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Agree</Text>
                    </Pressable>
                </View>
            </Modal>
            <Text style={styles.titleText}>Welcome</Text>
            <Text style={styles.selectText}>Select an avatar</Text>
            <StatusBar style="auto"/>
            <SelectDropdown
                data={avatarImages}
                onSelect={handleSelect}
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
            <ContinueButton
                title="Continue"
                id="ContinueButton_WelcomeScreen"
                onPress={handleContinue}
            />
            <Text style={styles.footerText}> All avatars designed by OpenMoji – the open-source avatar and icon project.
                License: CC BY-SA 4.0 </Text>
        </View>
    );
}

// Styles for all the elements which needs to have changes made to them
const styles = StyleSheet.create({
    modalView: {
        marginTop: 275,
        margin: 35,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 55,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginBottom: -35,
        borderRadius: 30,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#c62f4e',
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    modalTitleText: {
        fontSize: 20,
        textDecorationLine: 'underline',
        marginTop: -35,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: 'center',
    },
    modalText: {
        fontSize: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
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

// Exports the welcome screen for use
export default WelcomeScreen;