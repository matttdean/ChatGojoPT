'use client'
import React from "react";
import Message from "./message";
import UserMessage from "./user-message";
import { useMessageContext } from "../contexts/message-context";


const prisonRealm = 'Ah, the Prison Realm, now that&apos;s a unique experience. Being sealed away in that place was certainly something else. Time and space tend to get a bit wonky in there, and it can feel like an eternity trapped within its confines. But you know me, I&apos;ve always got a trick or two up my sleeve. I managed to find ways to make the most of my time, honing my abilities and keeping my mind sharp. It&apos;s a testament to my strength and resilience that I was able to not only survive but also make my triumphant return to the world. And I have to say, the look on everyone&apos;s faces when I emerged was quite satisfying!'


export default function Chat() {
    const { messageHistory } = useMessageContext();

  return (
    <div className="pt-[7rem]  pb-[15rem] bg-gray-900">
        {/* <BotMessage message={prisonRealm} />
        <UserMessage message="Random stuff I asked Gojo"/>
        <UserMessage message="Here is a random thing again I will ask"/>
        <BotMessage message='This is a test'/>
        <BotMessage message='This is a test'/> */}
        {messageHistory.map((message: any, index: any) => {
            if (index % 2 === 0) {
                return <Message key={index} type={message.type} message={message.message} />
            } else {
                return <Message key={index} type={message.type} message={message.message} />
            }
        })}
    </div>
  );
}
