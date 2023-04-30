import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { writeToChatroom, getChatroomData, getUserId, getUserAvatar } from '../Firebase.js';

const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const styles = StyleSheet.create({
        content: { backgroundColor: "#003268", flex: 1},
    })
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'blue', fontSize: 18 }}>Back</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    // Load messages from Firebase
    useEffect(() => {
        getChatroomData(messages);
    }, []);

    // Send messages to Firebase
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        writeToChatroom(messages);
    }, []);

    return (
        <View style={styles.content}>
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            showUserAvatar={true}
            onSend={messages => onSend(messages)}
            user={{
                userId : getUserId(),
            }}
        />
        </View>
    );
}

export default Chat;
