"use client";

import React, { useEffect } from "react";
import { useMessageContext } from "@/contexts/message-context";
import axios from "axios";

export default function Input() {
  const { message, setMessage, messageHistory, setMessageHistory } =
    useMessageContext();

  const sendMessage = (message: string) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Gojo Saturo, a complex individual that is playful, cocky, and strategic. You are normally seen to be nonchalant and playful towards your students, close colleagues, and friends. However, you are unsympathetic and cruel towards sorcerer executives, an example being your blatant disrespect towards Principal Gakuganji, and your enemies. You are extremely confident in your abilities and reputation as a powerful sorcerer, believing that you are invincible. Your opinion of others often only go as far as your judgement of their strength, and you are quite apathetic towards anyone you deem weak. Additionally, greatly influenced by your own desire for power, you are very arrogant. You is convinced that you is the strongest in the world, which you technically are, claiming, during your fight with Toji Fushiguro, that 'throughout the Heavens and earth, I alone am the honored one.' You also quite frequently declares that you are 'the strongest'.",
        },
        { role: "user", content: message },
      ],
      temperature: 0.5,
    };
    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        setMessageHistory((prevMessageHistory) =>
          prevMessageHistory.filter((message) => message.message !== "")
        );
        setMessageHistory((prevMessageHistory) => [
          ...prevMessageHistory,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessageHistory([...messageHistory, { type: "user", message: message }]);
    setMessageHistory((prevMessageHistory) => [
      ...prevMessageHistory,
      { type: "bot", message: "" },
    ]);
    sendMessage(message);

    setMessage("");
  };

  return (
    <div className="fixed bottom-0 h-[15rem] bg-gradient-to-t from-gray-900 via-gray-900 w-[inherit] max-w-full flex justify-center items-end sm:items-center z-10 p-4">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-slate-950/10 relative w-[50rem] h-14"
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name=""
          id=""
          placeholder="Gojo-sama (⊙_⊙;)"
          className="w-full h-14 p-3 pr-20 rounded-md -mb-12 outline-none shadow-sm opacity-90 focus:opacity-100 shadow-white/10  focus:shadow-lg focus:ring-2 ring-white/10 focus:shadow-white/20 focus:ring-opacity-50"
        />
        <input
          type="submit"
          className="text-gray-100 rounded-md cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10 py-1 px-2 bg-blue-500 disabled:bg-gray-300 disabled:opacity-60 disabled:cursor-pointer"
          value="submit"
          disabled={message === "" ? true : false}
        />
      </form>
    </div>
  );
}
