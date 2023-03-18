import welcomeScreen from "./screens/WelcomeScreen";
import chatScreen from "./screens/ChatScreen";
import PageContext from "./PageContext";
import { useState } from "react";

export default function App() {

    const [showWelcome, setShowWelcome] = useState(true);
    const [showChat, setShowChat] = useState(false);

    return (
        <main>
            <PageContext.Provider value={{
                showWelcome,
                showChat,
            }}>
                {showChat ? <chatScreen />
                : <showWelcome />}
            </PageContext.Provider>
        </main>
    );
};


