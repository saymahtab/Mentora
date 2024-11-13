import React, { useRef, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function VideoChatRoom() {
    const { roomId } = useParams();
    const location = useLocation();
    const videoContainerRef = useRef(null);
    const userName = location.state?.userName || "Guest"; // Fallback to "Guest" if no name is provided

    useEffect(() => {
        const initializeMeeting = async () => {
            const appID = 2086942844;
            const serverSecret = "f0941bd37aa71e15db38b7030ebcee2c";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomId,
                Date.now().toString(),
                userName
            );

            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: videoContainerRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
            });
        };

        initializeMeeting();
    }, [roomId, userName]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 p-4">
            <div
                ref={videoContainerRef}
                className="
                    w-full
                    h-full
                    max-w-4xl
                    max-h-[80vh]
                    sm:max-h-[70vh]
                    md:max-h-[80vh]
                    lg:max-h-[85vh]
                    xl:max-h-[90vh]
                    bg-black
                    rounded-lg
                    shadow-lg
                    overflow-hidden
                "
            />
        </div>
    );
    
}
