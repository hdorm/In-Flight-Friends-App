import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { writeToChatroom, getChatroomData, getUserId } from '../Firebase.js';

const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
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
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            //How can I get the user's id from Firebase?
            user={{
                userId : 1,
            }}
        />
    );
}

export default Chat;
