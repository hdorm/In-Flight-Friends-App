import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import SelectDropdown from "react-native-select-dropdown";

const emojis = ['Happy', 'Sad', 'Mad'];

function WelcomeScreen() {
    return (
        <View style={styles.frontPage}>
            <Text style={styles.titleText}>Welcome</Text>
            <Text style={styles.selectText}>Select an emoji</Text>
            <StatusBar style="auto"/>
            <SelectDropdown
                data={emojis}
                defaultButtonText={' '}
                buttonStyle={styles.dropdownButton}
                onSelect={(selectedItem) => {
                    console.log(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item) => {
                    return item;
                }}
            />
            <TouchableOpacity
            //Implement the button functionality
                style={styles.continueButton}
                onPress={() => Alert.alert('Continue button pressed')}
                underlayColor='white'>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
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
        top: '68%'
    },
    continueButton: {
        backgroundColor: '#c62f4e',
        borderRadius: 30,
        width: 250,
        height: 60,
        justifyContent: 'center',
        top: '60%'
    },
    continueButtonText: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center'
    }
});

export default WelcomeScreen;