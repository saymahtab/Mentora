import { useRef, useState, useEffect } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { MdPermMedia } from "react-icons/md";
import { USER } from "../../../utils/db/dummy";
import { Link } from "react-router-dom";
import EmojiPicker from "emoji-picker-react"; // Emoji picker package

const CreatePost = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State to toggle emoji picker

  const imgRef = useRef(null);
  const emojiPickerRef = useRef(null); // Reference for the emoji picker

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Post Created Successfully");
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setText((prevText) => prevText + emojiObject.emoji); // Correct emoji object
    setShowEmojiPicker(false); // Close emoji picker after selection
  };

  // Close emoji picker if user clicks outside
  const handleClickOutside = (event) => {
    if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
      setShowEmojiPicker(false);
    }
  };

  // Add event listener for click outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isPending = false;
  const isError = false;

  const postOwner = USER[6];

  return (
    <div className="flex items-start p-4 pb-0 gap-4 bg-white rounded-lg border">
      <div className="avatar">
        <Link to={`/profile/${postOwner.username}`} className="w-10">
          <img
            src={postOwner.profileImg || "/avatar-placeholder.png"}
            className="cursor-pointer rounded-full"
          />
        </Link>
      </div>

      <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
        {/* Auto-expandable textarea */}
        <textarea
          className="textarea p-0 focus:outline-none border-none resize-none text-lg w-full border-gray-800 overflow-hidden"
          placeholder="Share your achievements!"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          style={{
            minHeight: "40px",
            maxHeight: "600px",
            overflowY: text.length > 0 ? "auto" : "hidden",
          }}
        />

        {/* Image Preview Section */}
        {img && (
          <div className="relative w-full mx-auto">
            <IoCloseSharp
              className="absolute top-0 right-0 bg-zinc-800 text-white rounded-full size-5 cursor-pointer"
              onClick={() => {
                setImg(null);
                imgRef.current.value = null;
              }}
            />
            <img src={img} className="rounded object-contain" />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between border-t border-[#d2d1d1] py-2">
          <div className="flex gap-2 items-center">
            <img
              src="/icons/Gallery.png"
              className="size-5 fill-primary cursor-pointer opacity-80"
              onClick={() => imgRef.current.click()}
            />
            {/* Emoji Button */}
            <BsEmojiSmileFill
              className="size-[1.1rem] text-[#3b3b3b] cursor-pointer"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
          </div>

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div ref={emojiPickerRef} className="absolute z-10">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}

          <input type="file" ref={imgRef} hidden onChange={handleImgChange} />

          <button className={`btn bg-[#0073E6] rounded-full btn-sm text-white px-4 hover:bg-[#0073E9] ${text==''? 'opacity-50 cursor-default': 'opacity-100'}`}>
            {isPending ? "Posting..." : "Post"}
          </button>
        </div>

        {/* Error Handling */}
        {isError && <div className="text-red-500">error</div>}
      </form>
    </div>
  );
};

export default CreatePost;
