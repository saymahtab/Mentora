import React from "react";

const MentorAbout = ({mentor}) => {
  return (
    <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
      <h2 className="text-xl font-semibold mb-4">About Mentor</h2>
      <p>{mentor.bio}</p>
    </section>
  );
};

export default MentorAbout;
