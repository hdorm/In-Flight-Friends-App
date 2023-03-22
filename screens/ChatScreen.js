import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const signOutNow = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.replace('Login');
        }).catch((error) => {
            // An error happened.
        });
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'blue', fontSize: 18 }}>Back</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Best wings in town?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: require('../images/awesome.png'),
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}
        />
    );
}

export default Chat;
