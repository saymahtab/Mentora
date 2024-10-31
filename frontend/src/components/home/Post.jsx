import { useState } from "react";
import { FaRegComment, FaRegHeart, FaGlobeAsia } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa6";
import LoadingSpinner from "../common/LoadingSpinner";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";

const Post = ({ post }) => {
  const [comment, setComment] = useState("");

  const postOwner = post.user;
  const isMyPost = false;
  const isDeleting = false;
  const isCommenting = false;
  const isLiking = false;

  const isLiked = false;

  const handleDeletePost = () => {};

  const handlePostComment = (e) => {
    e.preventDefault();
  };

  const handleLikePost = () => {};

  return (
    <>
      <div className="flex flex-col items-start bg-white my-2 rounded-lg border relative">
        <div className="p-4 pb-2">
          <div className="flex items-center gap-3 absolute right-3 top-2">
            <BsThreeDots className="size-5 cursor-pointer"/>
            <RxCross2 className="size-5 cursor-pointer"/>
          </div>
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <Link to={`/profile/${postOwner.username}`} className="w-[2.8rem] rounded-full overflow-hidden">
                <img
                  src={postOwner.profileImg || "/avatar-placeholder.png"}
                  alt={postOwner.fullName}
                />
              </Link>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex gap-2 items-center">
                <Link to={`/profile/${postOwner.username}`} className="font-semibold text-[#3e3e3e]">
                  {postOwner.firstName} {postOwner.lastName}
                </Link>
                {/* <img src="/icons/verified.png" className="size-3" alt="Verified" /> */}
              </div>
              <p className="text-xs text-[#959595] ">{postOwner.bio}</p>
              <span className="flex items-center gap-1 text-xs text-[#959595] ">
                <span>1d</span>
                <span>·</span>
                <FaGlobeAsia className="text-[#636363] ml-1 size-[0.8rem]" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-2 overflow-hidden">
            <span className="text-[#1f1f1f] pl-4 text-sm">{post.text}</span>
            {post.img && (
              <img src={post.img || "/cover.png"} className="h-full object-contain" alt="Post content" />
            )}
        </div>
		<div className="flex justify-between px-2 items-center border-b py-2">
			<span className="text-sm text-[#4f4f4f]">
				❤️{post.likes[0]?.user?.fullName} and {post.likes.length - 1} others
			</span>
			<span className="text-sm text-[#959595] cursor-pointer hover:underline hover:text-sky-700">{post.comments.length} comments</span>
		</div>
          
          <div className="flex items-center justify-between mx-1 py-1 font-semibold">
            <div className="flex items-center w-2/3 justify-between">
			<div
                className="flex gap-1 items-center group cursor-pointer hover:bg-[#f4f3f3] px-10 py-4 rounded-sm"
                onClick={handleLikePost}
              >
                {isLiking && <LoadingSpinner size="sm" />}
                {!isLiked && !isLiking && (
                  <FaRegHeart className="w-4 h-4 cursor-pointer text-slate-500" />
                )}
                {isLiked && !isLiking && (
                  <FaRegHeart className="w-4 h-4 cursor-pointer" />
                )}

                <span
                  className="text-sm text-slate-500"
                >
                  Like
                </span>
              </div>
              <div
                className="flex gap-1 items-center cursor-pointer group hover:bg-[#f4f3f3] px-8 py-4 rounded-sm"
              >
                <FaRegComment className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-500">
                  Comment
                </span>
              </div>

              <div className="flex gap-1 items-center group cursor-pointer hover:bg-[#f4f3f3] px-8 py-3 rounded-sm">
                <BiRepost className="w-6 h-6 text-slate-500" />
                <span className="text-sm text-slate-500">
                  Repost
                </span>
              </div>
            </div>
            <div className="flex justify-around items-center gap-2 cursor-pointer hover:bg-[#f4f3f3] px-8 py-4 rounded-sm">
              <FaRegBookmark className="w-4 h-4 text-slate-500 cursor-pointer" />
			  	<span className="text-sm text-slate-500">
                  Share
            	</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

// {post.comments.length > 0 && (
// 	<div className="px-4 py-2 border-t border-gray-300">
// 	  <div className="text-sm text-gray-600">
// 		<strong>{post.comments[0].user.fullName}</strong> commented:{" "}
// 		{post.comments[0].text.length > 30
// 		  ? post.comments[0].text.substring(0, 30) + "..."
// 		  : post.comments[0].text}
// 	  </div>
// 	  <Link
// 		className="text-blue-500 text-sm"
// 		onClick={() =>
// 		  document.getElementById("comments_modal" + post._id).showModal()
// 		}
// 	  >
// 		View all {post.comments.length} comments
// 	  </Link>
// 	</div>
//   )}
