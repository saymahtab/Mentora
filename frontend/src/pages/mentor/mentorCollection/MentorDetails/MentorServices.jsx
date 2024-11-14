import React from "react";
import { useNavigate } from "react-router-dom";

const MentorServices = ({mentor}) => {

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg border shadow-sm mt-2 pb-4">
      <h2 className="text-xl font-semibold ml-6 mt-3 text-zinc-700">
        Services
      </h2>
      <div className="px-6 pb-3">
        {mentor.services.map((service) => (
          <div
            key={service._id}
            className="px-4 py-3 bg-zinc-50 rounded-2xl mt-4 border"
          >
            <span className="bg-[#FCE8EF] px-3 text-xs py-1 rounded-lg text-[#6E1434] font-medium">
              📞 1:1 Call
            </span>
            <div className="flex items-start justify-between p-1 mt-2">
              <div className="flex flex-col items-start gap-1">
                <p className="text-xl font-medium text-zinc-600">
                  {service.name}
                </p>
                <p className="text-zinc-600">{service.duration}</p>
                <div className="flex items-center gap-2">
                  <p className="mt-2 font-medium text-sm text-zinc-500 line-through">
                    ${service.price}
                  </p>
                  <p className="mt-2 font-medium text-xl text-zinc-700">
                    ₹{service.discountPrice}
                  </p>
                </div>
              </div>
              <button 
                className="border-2 border-zinc-700 px-4 py-1 rounded-full text-zinc-700 transition-all duration-300 hover:shadow-[inset_0_0_0_1px_black]"
                onClick={() => navigate('/booking')}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="ml-7 text-[#0073E6] font-medium cursor-pointer">
        View more
      </p>
    </div>
  );
};

export default MentorServices;
