import React from "react";

function MentorTopics({mentor}) {
  return (
    <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
      <h2 className="text-xl font-semibold mb-4">Topics</h2>
      <div className="flex flex-wrap items-start gap-2">
        {mentor.expertise.topics.map((topic, index) => (
          <p key={index} className="border rounded-full px-4 py-1 text-[#777]">{topic}</p>
        ))}
      </div>
    </section>
  );
}

export default MentorTopics;
