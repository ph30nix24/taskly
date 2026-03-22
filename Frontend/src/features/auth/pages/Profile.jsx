import { IoMdCheckmark } from "react-icons/io";
import { CgSandClock } from "react-icons/cg";
import { MdChevronRight, MdOutlinePendingActions } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoCamera } from "react-icons/io5";

import { useAuth } from "../hooks/useAuth";
import { useTask } from "../../dashboard/hooks/useTask";
import { filterTask } from "../../../Constant";
import { useState } from "react";
import AvatarForm from "../components/AvatarForm";
import UpdateForm from "../components/UpdateForm";
import { useNavigate } from "react-router";


const Profile = () => {
  const { user, loading, avatar, setAvatar, handleUpdateAvatar, handleLogout } = useAuth();
  const { tasks } = useTask();
  const totalTasks = tasks?.length;
  const filteredTasks = filterTask(tasks);
  const sortedTasks = tasks.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  ); 
  const [avatarFormClick, setAvatarFormClick] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await handleLogout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  if(loading) {
    return (
      <main className="w-full h-screen flex-center"><Loader /></main>
    )
  }
  return (
    <main className="w-full min-h-secreen lg:h-screen py-10 pt-20 lg:pt-25 bg-linear-to-br from-[#ecebf9] to-[#FFFFFF] relative z-2 overflow-hidden px-5 lg:px-0">
      {avatarFormClick && (
        <div className="w-full h-full absolute top-0 left-0 z-60 bg-black/20 flex justify-center items-start lg:items-center px-5 lg:px-0 pt-30 lg:pt-0 backdrop-blur-sm">
          <AvatarForm avatar={avatar} loading={loading} handleUpdateAvatar={handleUpdateAvatar} setAvatar={setAvatar} setUpdateAvatarClick={setAvatarFormClick} />
        </div>
      )}
      {isClicked && (
        <div className="w-full h-full absolute top-0 left-0 z-60 bg-black/20 flex justify-center items-start lg:items-center px-5 lg:px-0 pt-30 lg:pt-0 backdrop-blur-sm">
          <UpdateForm avatar={avatar} setIsClicked={setIsClicked} />
        </div>
      )}
      <nav className="w-full lg:w-300 fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-5 lg:px-10 py-5">
        <h1 className="font-hero text-purple-500 text-[5vw] lg:text-2xl">
          Taskly
        </h1>
        <div className="flex items-center gap-3 lg:gap-5">
          <a
            href="/"
            className="font-body text-[2.6vw] lg:text-sm text-[#555] hover:border-b-1 hover:text-[#111] transition-smooth font-medium capitalize"
          >
            home
          </a>
          <a
            href="/dashboard"
            className="font-body text-[2.6vw] lg:text-sm text-[#555] hover:border-b-1 hover:text-[#111] transition-smooth font-medium capitalize"
          >
            dashboard
          </a>
          <button className="btn border-1 border-slate-300 text-[2.2vw]! lg:text-xs! hover:bg-linear-to-r hover:from-[#9c60eb] hover:to-[#c396fd] hover:text-white transition-smooth" onClick={handleLogin}>
            Log Out
          </button>
        </div>
      </nav>
      <img
        src="./imgs/cloud4.png"
        className="absolute hidden lg:block size-60 -translate-x-3/10 translate-y-3/10 object-contain top-5 right-5 opacity-80 z-10"
        alt=""
      />
      <div className="w-full lg:w-250 mx-auto flex px-5 lg:px-10 py-5 gap-3 lg:gap-10 items-center shadow-bg rounded-xl  relative bg-linear-to-tl from-[#ecebf9] to-[#FFFFFF] z-20">
        <img
          src="./imgs/drop2.png"
          className="absolute size-5 object-contain top-10 left-20 translate-x-[200%] opacity-40 z-30"
          alt=""
        />
        <img
          src="./imgs/drop1.png"
          className="absolute size-12 object-contain top-8 right-35 translate-x-[200%] opacity-20 z-30"
          alt=""
        />
        <img
          src="./imgs/drop2.png"
          className="absolute size-8 object-contain top-15 right-20 translate-x-[200%] opacity-20 z-30"
          alt=""
        />
        <img
          src="./imgs/drop2.png"
          className="absolute size-8 object-contain top-0 right-20 translate-x-[200%] opacity-20 z-20"
          alt=""
        />

        <div className="w-18 lg:size-25 rounded-full overflow-hidden bg-[#dad0ff] relative z-40">
          <img
            src={avatar}
            className="size-full object-scale-down"
            alt=""
          />
        </div>
        <div className="w-[calc(100%-72px)] lg:w-[calc(100%-120px)] flex relative ">
          <div className="w-full">
            <h1 className="text-[4vw] lg:text-2xl font-heading text-[#333333]">
              {user?.name}
            </h1>
            <p className="text-[2.4vw] lg:text-sm text-[#555555] font-body ">
              @{user?.username}
            </p>
            <p className="mt-3 font-body font-medium text-[2.4vw] lg:text-sm text-[#444444] ">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <button className="absolute btn bottom-0 right-0 bg-linear-to-r from-[#9c60eb] to-[#c396fd] text-white text-[2.2vw]! lg:text-sm!" onClick={() => setIsClicked(true)}>
            Edit Profile
          </button>
        </div>
      </div>
      <div className="w-full lg:w-250 h-fit lg:h-40 mx-auto my-5 flex gap-2 lg:gap-5 flex-wrap lg:flex-nowrap">
        <div className="profile-card shadow-bg">
          <div className="flex items-center gap-2 font-body w-full">
            <IoMdCheckmark size={20} color={"#12b206"} />
            <h1 className="text-[2.6vw] lg:text-sm">Tasks Completed</h1>
          </div>
          <p className="text-[4.5vw] lg:text-3xl py-3 font-body">
            {filteredTasks?.isCompleted.length || 0}
          </p>
          <div className="relative ">
            {/* Custom track */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-green-400 transition-all duration-200"
                style={{
                  width: `${(filteredTasks?.isCompleted.length / totalTasks) * 100}%`,
                }}
              />
            </div>

            {/* Invisible range input on top */}
            <input
              type="range"
              min={0}
              max={totalTasks}
              step={1}
              value={filteredTasks?.isCompleted.length}
              className="absolute inset-0 w-full opacity-0 pointer-events-none h-full"
            />
          </div>
          <p className="font-body text-xs mt-3">
            Tasks | <span className="text-[#777] font-medium">Completed</span>
          </p>
        </div>
        <div className="profile-card shadow-bg">
          <div className="flex items-center gap-2 font-body w-full">
            <CgSandClock size={20} color={"#f7be39"} />
            <h1 className="text-[2.6vw] lg:text-sm">Tasks Pending</h1>
          </div>
          <p className="text-[4.5vw] lg:text-3xl py-3 font-body ">
            {" "}
            {filteredTasks.pendingTasks.length || 0}{" "}
          </p>
          <div className="relative ">
            {/* Custom track */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-amber-400 transition-all duration-200"
                style={{
                  width: `${(filteredTasks.pendingTasks.length / totalTasks) * 100}%`,
                }}
              />
            </div>

            {/* Invisible range input on top */}
            <input
              type="range"
              min={0}
              max={totalTasks}
              step={1}
              value={filteredTasks.pendingTasks.length}
              className="absolute inset-0 w-full opacity-0 pointer-events-none h-full"
            />
          </div>
          <p className="font-body text-xs mt-3">
            Tasks | <span className="text-[#777] font-medium">Pending</span>
          </p>
        </div>
        <div className="profile-card shadow-bg">
          <div className="flex items-center gap-2 font-body w-full">
            <MdOutlinePendingActions size={20} color={"#f0441e"} />
            <h1 className="text-[2.6vw] lg:text-sm">Tasks OverDue</h1>
          </div>
          <p className="text-[4.5vw] lg:text-3xl py-3 font-body ">
            {filteredTasks.overdueTasks.length || 0}
          </p>
          <div className="relative ">
            {/* Custom track */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-red-400 transition-all duration-200"
                style={{
                  width: `${(filteredTasks.overdueTasks.length / totalTasks) * 100}%`,
                }}
              />
            </div>

            {/* Invisible range input on top */}
            <input
              type="range"
              min={0}
              max={totalTasks}
              step={1}
              value={filteredTasks.overdueTasks.length}
              className="absolute inset-0 w-full opacity-0 h-full pointer-events-none"
            />
          </div>
          <p className="font-body text-xs mt-3">
            Tasks | <span className="text-[#777] font-medium">Over Due</span>
          </p>
        </div>
        <div className="profile-card shadow-bg">
          <div className="flex items-center gap-2 font-body w-full">
            <FaArrowTrendUp size={20} color={"#7E97E9"} />
            <h1 className="text-[2.6vw] lg:text-sm">Productivity</h1>
          </div>
          <p className="text-[4.5vw] lg:text-3xl py-3 font-body font-medium">
            {(filteredTasks?.isCompleted.length / totalTasks) * 100}%
          </p>
          <div className="relative ">
            {/* Custom track */}
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-200"
                style={{
                  width: `${(filteredTasks?.isCompleted.length / totalTasks) * 100}%`,
                }}
              />
            </div>

            {/* Invisible range input on top */}
            <input
              type="range"
              min={0}
              max={totalTasks}
              step={1}
              value={filteredTasks?.isCompleted.length}
              className="absolute inset-0 w-full opacity-0 h-full pointer-events-none"
            />
          </div>
          <p className="font-body text-xs mt-3">
            Tasks | <span className="text-[#777] font-medium">Pending</span>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-250 flex flex-col lg:flex-row gap-5 mx-auto relative z-10 mb-20">
        <img
          src="./imgs/userProfileAvatar.png"
          className="absolute size-70 lg:size-110 object-contain bottom-0 lg:bottom-auto right-0 translate-x-2/10 lg:translate-x-4/10 translate-y-[25%] lg:-translate-y-[5%]"
          alt=""
        />
        <div className="w-4/5 lg:w-1/2 self-end h-70 bg-linear-to-br from-55% from-[#FFFFFF] to-[#ecebf9]  shadow-bg rounded-xl py-3 px-5 ">
          <h1 className="font-body font-medium text-[#333]">
            Account Settings
          </h1>
          <div className=" w-full flex py-3">
            <div className="size-20 rounded-l-xl bg-[#DAD0FF] overflow-hidden">
              <img
                src={avatar}
                className="size-22 object-scale-down"
                alt=""
              />
            </div>
            <div className="h-20 w-[calc(100%-72px)] flex flex-col gap-2">
              <div className="w-full h-1/2 border-2 border-slate-200 rounded-r-md font-body font-medium px-3 flex items-center text-xs text-[#333] border-l-0">
                {user.name}
              </div>
              <div className="w-full h-1/2 border-2 border-slate-200 rounded-r-md font-body font-medium px-3 flex items-center text-xs text-[#333] border-l-0">
                {user.email}
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex justify-between items-center">
            <p className="font-body font-medium flex items-center text-[2.5vw] lg:text-sm text-[#333] capitalize">
              change password
            </p>
            <button className="btn text-[2vw]! lg:text-xs! bg-linear-to-r from-[#9c60eb] to-[#c396fd] text-white">
              Update
            </button>
          </div>
          <div className="w-full h-fit pt-2">
            <button className="btn w-full block mb-2 rounded-md! border-2 border-slate-200 shadow-none! hover:shadow! text-[2.2vw]! lg:text-xs! flex-center gap-3" onClick={() =>  setAvatarFormClick(true)}>
              <IoCamera className="lg:text-lg text-base" />{" "}
              <span>Change Avatar</span>
            </button>
            <button className="btn w-full block text-red-400 rounded-md! border-2 border-slate-200 shadow-none! hover:shadow! text-[2.2vw]! lg:text-xs!">
              Delete Account
            </button>
          </div>
        </div>
        <div className="w-4/5 lg:w-1/2 h-fit lg:h-70 shadow-bg rounded-xl bg-linear-to-br from-55% from-[#FFFFFF] to-[#ecebf9] py-3 px-5 ">
          <h1 className="font-body font-medium text-[#333]">Recent Activity</h1>
          <div className="w-full mb-5 h-37 lg:mb-7">
            {sortedTasks.slice(0, 4).map((task) => (
              <div className="w-full flex gap-2 items-center mt-3 lg:mt-5">
                {task.isCompleted ? (
                  <IoMdCheckmark
                    className="lg:text-[20px] text-base"
                    color={"#12B206"}
                  />
                ) : (
                  <CgSandClock
                    className="lg:text-[20px] text-base"
                    color={"#F8C652"}
                  />
                )}
                <p className="font-body font-medium text-[#333] text-[2.7vw] lg:text-sm">
                  {task.title}
                </p>
              </div>
            ))}
          </div>
          <hr className="border-slate-200 " />
          <a href="/dashboard" className="w-fit flex items-center text-primary mt-3 mb-1">
            <p className="font-body text-xs ">View all</p>{" "}
            <MdChevronRight size={18} />
          </a>
        </div>
      </div>
      <img
        src="./imgs/footer.png"
        className="w-full h-80 object-cover object-top absolute bottom-0 left-0 z-1"
        alt=""
      />
    </main>
  );
};

export default Profile;
