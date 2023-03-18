import welcomeScreen from "./screens/welcomeScreen";
import chatScreen from "./screens/chatScreen";
import PageContext from "./Pagecontext";
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


