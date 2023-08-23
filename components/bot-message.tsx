import React from "react";

type BotMessageProps = {
    message: string;
}

export default function BotMessage({message}: BotMessageProps) {
  return (
    <div className="w-full h-auto p-4">
      <div className="w-fit max-w-[35rem] p-6 bg-gray-600/20 rounded-3xl text-gray-100 shadow-lg shadow-gray-950/20">
        {message}
      </div>
    </div>
  );
}
