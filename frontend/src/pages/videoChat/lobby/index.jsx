import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Lobby() {
    const [roomCode, setRoomCode] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const generateId=()=>{
        return Math.floor(100000 + Math.random()*900000);
    }
    console.log(generateId());

    const handleJoinRoom = () => {
        if (roomCode && userName) {
            navigate(`/room/${roomCode}`, { state: { userName } });
        } else {
            alert("Please enter both your name and room code.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-indigo-400 mb-4">Video Chat Lobby</h1>
                <p className="text-center text-gray-400 mb-6">Enter your name and room code to join the video chat.</p>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300">Your Name</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300">Room Code</label>
                    <input
                        type="text"
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        placeholder="Enter room code"
                        className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button
                    onClick={handleJoinRoom}
                    className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-semibold transition duration-200"
                >
                    Join Room
                </button>
            </div>
        </div>
    );
}
