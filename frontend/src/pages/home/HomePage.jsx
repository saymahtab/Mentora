import CreatePost from "../../components/home/CreatePost";
import Posts from "../../components/home/Posts";
import RightPanel from "../../components/home/RightPanel";
import Sidebar from "../../components/home/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="flex max-w-[74rem] mx-auto mt-2 relative top-[3.2rem]">
        <Sidebar />
        <div className="flex-[4_4_0] min-h-screen">
          <CreatePost />
          <Posts />
        </div>
        <RightPanel />
      </div>
    </>
  );
};

export default HomePage;
