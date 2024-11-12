import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";

const Experience = ({mentor}) => {
  return (
    <section className="flex items-start flex-col px-6 py-5 bg-white rounded-lg border mt-2 text-zinc-700">
    <h2 className="text-xl font-semibold mb-5">Experience</h2>
    <div className="flex flex-col items-start gap-6 w-full">
      {mentor.experience.map((item) => (
        <div key={item._id} className="flex items-start gap-3 w-full">
          <div className="h-8 w-8 bg-blue-900 text-white text-center pt-1 text-sm">
          {item.work.split(' ').slice(0, 2).map(word => word[0].toUpperCase()).join('')}
          </div>
          <div className="flex items-start flex-col gap-1">
            <p className="leading-3 font-medium">
              {item.work}
            </p>
            <p className="text-sm mt-1 flex gap-2 items-center">
              <MdOutlineSchool className="text-lg" />
              {item.organization}
            </p>
            <p className="text-sm flex gap-2 items-center ml-1">
              <MdOutlineWorkOutline />
              {item.from} - {item.to}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Experience
