import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs"; // To import half-star icon
import { useEffect, useState } from "react";

const Reviews = ({ mentor }) => {
  const [avgRating, setAvgRating] = useState(mentor.avgRating);

  // State to handle expanded review messages
  const [expandedReviews, setExpandedReviews] = useState({});

  useEffect(() => {
    if (mentor.reviews && mentor.reviews.length > 0) {
      const totalRating = mentor.reviews.reduce((sum, review) => sum + review.rating, 0);
      const calculatedAvgRating = (totalRating / mentor.reviews.length).toFixed(1); 
      setAvgRating(calculatedAvgRating); 
    }
  }, [mentor.reviews]);

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); 
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; 
    const emptyStars = 5 - fullStars - halfStar; 

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} className="text-[#ffdc13]" />);
    }

    if (halfStar) {
      stars.push(<BsStarHalf key={fullStars} className="text-[#ffdc13]" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<BsStarFill key={fullStars + halfStar + i} className="text-[#cfcfcf]" />);
    }

    return stars;
  };

  // Toggle the expanded state of a review
  const toggleReview = (reviewId) => {
    setExpandedReviews(prevState => ({
      ...prevState,
      [reviewId]: !prevState[reviewId],
    }));
  };

  return (
    <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700 w-full relative pb-10 ">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-center border rounded-3xl py-4 px-12">
          <p className="text-5xl font-semibold">{avgRating}</p>
          <div className="flex items-center gap-2 mt-2">
            {renderStars(parseFloat(avgRating))}
          </div>
          <p className="text-zinc-500">Average Rating</p>
          <p className="text-zinc-500">{mentor.reviews.length} Reviews</p>
        </div>
        <div className="p-5 flex flex-col items-start gap-6 w-full border rounded-3xl ml-3 text-[#4b4b4b] mb-3">
          {mentor.reviews.map((review, index) => (
            <div 
              key={review._id} 
              className={`flex items-start flex-col ${index !== mentor.reviews.length - 1 ? 'border-b' : ''} w-full`}
            >
              <div className="flex items-start justify-between pb-1 w-full">
                <div className="flex gap-3 items-start">
                  <div className="flex w-11">
                    <img
                      src={review.profileImg || "/avatar-placeholder.png"}
                      className="cursor-pointer rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-md font-medium leading-4">
                      {review.menteeName}
                    </p>
                    <p className="text-xs text-[#595959] mt-1">
                      {review.date}, {review.time}
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1 bg-green-700 rounded-md px-2 text-sm font-medium text-white">
                  {review.rating}
                  <BsStarFill className="size-3" />
                </span>
              </div>
              
              {/* Review message */}
              <p 
                className={`text-[#757575] pb-1 ${expandedReviews[review._id] ? "" : "line-clamp-3 overflow-hidden text-ellipsis"}`}
              >
                {review.message}
              </p>
              
              {/* Show More/Show Less toggle */}
              <button 
                onClick={() => toggleReview(review._id)} 
                className="text-zinc-500 text-xs font-medium mb-2 hover:underline"
              >
                {expandedReviews[review._id] ? "Show Less" : "Show More"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="text-[#0073E6] font-medium absolute bottom-5 left-64">
        Show More
      </button>
    </section>
  );
};

export default Reviews;
