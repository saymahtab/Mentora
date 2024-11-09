import React, { useState } from "react";
import { MdOutlineEdit, MdClose } from "react-icons/md";
// import { FiUpload, AiOutlineCloudUpload } from "react-icons/fi";
import { AiOutlineCloudUpload } from 'react-icons/ai';


const BackgroundSelector = () => {
    const [backgroundImage, setBackgroundImage] = useState("https://tinyurl.com/yd38z49y"); // Default background
    const [showModal, setShowModal] = useState(false);
    const [selectedColor, setSelectedColor] = useState("blue"); // Default color

    // Predefined images based on color
    const colorOptions = {
        blue: ["https://tinyurl.com/ymk2v4nm", "https://tinyurl.com/2p48589s", "https://tinyurl.com/25amx68m"],
        red: ["https://tinyurl.com/ks68576e", "https://tinyurl.com/2rrz9raj", "https://tinyurl.com/zrxtd56u"],
        green: ["https://tinyurl.com/2v5sre85", "https://tinyurl.com/yrpd2a2f", "https://tinyurl.com/2dxjtwuw"],
        yellow: ["https://shorturl.at/QPVsZ", "https://tinyurl.com/3bf95zye", "https://tinyurl.com/p3fa95ts"],
        purple: ["https://tinyurl.com/2dsjv9sv", "https://tinyurl.com/yd38z49y", "https://tinyurl.com/3ykabch8"],
    };

    const handleEditClick = () => {
        setShowModal(true);
    };

    const handleImageSelect = (image) => {
        setBackgroundImage(image);
        setShowModal(false);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setBackgroundImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
        setShowModal(false);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className=" flex mx-auto w-[73.5rem] rounded-xl relative">
            {/* Background Image */}
            <div
                className="w-full h-48 bg-cover rounded-xl bg-center relative"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                {/* Edit Button */}
                <button
                    onClick={handleEditClick}
                //   className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none"
                >
                    <MdOutlineEdit className="absolute right-3 top-3 size-7 bg-slate-200 rounded-full p-1 text-[#0073E6] cursor-pointer" />
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 w-2/3 h-5/6 max-w-full">
                        {/* Close button in top right corner */}
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold mb-4">Cover Image</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className=" text-black hover:text-gray-700 mb-4"
                            >
                                <MdClose size={24} />
                            </button>
                        </div>
                        <hr className="mb-6" />
                        <h3 className="font-semibold">Default Cover Image</h3>
                        <p className="text-sm text-slate-500 mb-6">We will add default cover image in case you do not upload custom desktop or mobile banners. You can also customize these as per your liking. A wide range of color themes are also available.</p>

                        {/* Color Selector */}
                        <h3 className="font-semibold mb-2">Choose Template</h3>
                        <div className="flex space-x-2 mb-4 rounded-xl">
                            {Object.keys(colorOptions).map((color) => (
                                <button
                                    key={color}
                                    className={`p-2 rounded-full ${color === selectedColor ? "ring-2 ring-blue-500" : ""
                                        }`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorChange(color)}
                                />
                            ))}
                        </div>

                        {/* Preset Images Based on Selected Color */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            {colorOptions[selectedColor].map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Preset ${index + 1}`}
                                    className="w-full h-24 object-cover rounded-lg cursor-pointer"
                                    onClick={() => handleImageSelect(image)}
                                />
                            ))}
                        </div>

                        {/* Upload Image Option */}
                        <div className="mb-4">
                            <h2 className="font-semibold">Upload Banner</h2>
                            <p className="text-sm text-slate-500">
                                You can upload custom banners for the opportunity. We recommend uploading both mobile and desktop banners.
                            </p>
                            <div className="border-dotted border-2 border-slate-700 rounded-md mt-8 h-36  text-center">
                                <label className=" bg-gray-200 text-center px-4 py-2 h-full rounded cursor-pointer flex flex-col items-center justify-center">
                                    {/* New Upload Icon in the center */}
                                    <AiOutlineCloudUpload className="text-4xl mb-2" />

                                    {/* Instructions */}
                                    <p className="text-xs text-slate-500">Click to browse or drag and drop your files.</p>

                                    {/* File Input (Hidden) */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                    />
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default BackgroundSelector;
