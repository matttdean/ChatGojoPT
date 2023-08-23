import React from "react";

type UserMessageProps = {
    message: string;
}

export default function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="w-full h-auto p-4">
      <div className="w-fit max-w-[35rem] p-6 bg-blue-600/80 text-gray-100 rounded-3xl mr-0 ml-auto shadow-lg shadow-gray-950/20">
        {message}
      </div>
    </div>
  );
}
