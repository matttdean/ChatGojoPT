import React from "react";

type MessageProps = {
  type: "user" | "bot";
  message: string;
};

export default function Message({ type, message }: MessageProps) {
  if (type === "bot") {
    return (
      <div className="w-full h-auto p-4 ">
        <div className="w-fit min-h-[72px] max-w-[40rem] p-6 bg-gray-600/20 rounded-3xl text-gray-100 shadow-lg shadow-gray-950/20 flex justify-center items-center">
          {message === "" 
          ? <div className="flex gap-1"><div className="loading"/><div className="loading"/><div className="loading"/></div>
          : message}
        </div>
      </div>
    );
  } else if (type === "user") {
    return (
      <div className="w-full h-auto p-4">
        <div className="w-fit max-w-[40rem] p-6 bg-blue-600/80 text-gray-100 rounded-3xl mr-0 ml-auto shadow-lg shadow-gray-950/20">
          {message}
        </div>
      </div>
    );
  }
}
