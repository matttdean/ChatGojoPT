'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'

type MessageContextProviderProps = {
    children: React.ReactNode;

}

type MessageHistory = {
    type: "user" | "bot";
    message: string;
}

type MessageContextType = { 
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    messageHistory: Array<MessageHistory>;
    setMessageHistory: React.Dispatch<React.SetStateAction<Array<MessageHistory>>>;
}
const MessageContext = createContext<MessageContextType | null>(null);

export default function MessageContextProvider({ children }: MessageContextProviderProps) {
    const [message, setMessage] = useState("");
    const [messageHistory, setMessageHistory] = useState<Array<MessageHistory>>([{type: "bot", message: "Yo! I'm Gojo Satoru, the strongest Jujutsu Sorcerer in the world. I'm here to answer any questions you have about me or Jujutsu Kaisen."}]);

    const scrollToBottom = () => {
window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    }

    useEffect(() => {
        console.log(messageHistory)
        scrollToBottom();
    }, [messageHistory])

  return (
    <MessageContext.Provider value={{ message, setMessage, messageHistory, setMessageHistory}}>
        {children}
    </MessageContext.Provider>
  )
}

export function useMessageContext() {
    const context = useContext(MessageContext);
    if (context === null) {
        throw new Error(
            "useMessageContext must be used within a MessageContextProvider"
        );
    }
    return context;
}
