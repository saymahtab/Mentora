import React, { useState, useEffect, useRef } from 'react';
import { ZIMKitProvider, ZIMKitChat, ZIMKitMessage } from '@zegocloud/zimkit-react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const ChatApp = () => {
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');
  const messageInputRef = useRef(null);
  const [messages, setMessages] = useState([]);

  // Define the ZEGOCLOUD app credentials
  const appID = 1474864814; // Replace with your actual App ID
  const appSecret = '614ccd5a254dfc9bf61b0e2a6f66ed65'; // Replace with your actual App Secret

  useEffect(() => {
    if (!userName || !roomId) return;

    const initializeChat = async () => {
      const kitToken = ZIMKit.generateKitTokenForTest(
        appID,
        appSecret,
        roomId,
        Date.now().toString(),
        userName
      );

      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({ roomID: roomId });
      zc.on('messageReceived', handleNewMessage);
    };

    initializeChat();
  }, [userName, roomId]);

  // Handle new messages received from the chat
  const handleNewMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { from: message.from, content: message.content },
    ]);
  };

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    if (message && roomId) {
      ZIMKit.sendMessage({
        roomID: roomId,
        content: message,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: userName, content: message },
      ]);
      messageInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        {/* User Name & Room ID Inputs */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border rounded"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Room ID"
            className="w-full p-2 border rounded"
            onChange={(e) => setRoomId(e.target.value)}
          />
        </div>

        {/* Chat Container */}
        <div className="mb-4 h-60 overflow-y-auto bg-gray-50 p-4 rounded-lg border">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className="text-left">
                <span className="font-semibold">{message.from}: </span>
                <span>{message.content}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="flex">
          <input
            ref={messageInputRef}
            type="text"
            placeholder="Type a message"
            className="w-full p-2 border rounded-l"
          />
          <button
            onClick={sendMessage}
            className="p-2 bg-blue-500 text-white rounded-r"
          >
            Send
          </button>
        </div>
      </div>

      {/* ZEGOCLOUD Chat UI */}
      <div className="mt-6 w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-center font-bold text-xl mb-4">ZEGOCLOUD Chat</h3>
        <ZIMKitChat
          appID={appID}
          appSecret={appSecret}
          userName={userName}
          roomID={roomId}
          onMessageReceived={(message) => handleNewMessage(message)}
          onSendMessage={(messageContent) => {
            sendMessage(messageContent);
          }}
        />
      </div>
    </div>
  );
};

export default ChatApp;
