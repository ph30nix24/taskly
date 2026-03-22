import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { useAuth } from "../../auth/hooks/useAuth";

const Head = ({ tasks }) => {
  const { user, avatar } = useAuth();
  return (
    <div className="w-full flex relative z-20">
      <div className="w-[calc(100%-320px)]">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-heading">
            Welcome to <span className="text-primary">Taskly</span> Management
          </h1>
          <div className="flex items-center w-80 gap-2 px-3 py-2 bg-white/70 rounded-full cursor-pointer [box-shadow:_0_4px_8px_#3b73e33e]">
            <CiSearch size={24} />
            <input
              className="px-2 py-1 w-full outline-none text-sm"
              type="text"
              name="search"
              id="search"
              placeholder="search tasks.."
            />
          </div>
        </div>
        <div className="w-full flex gap-3 mt-10">
          <div className="w-1/5 task-cards">
            <div className="size-8 bg-gradient-to-tr from-primary to-blue-400 rounded-lg  text-xl text-white flex-center">
              <IoMdCheckmark />
            </div>
            <div className="text-sm font-heading">
              <h1>Tasks Pending</h1>
              <p> {tasks.pendingTasks.length || 0} </p>
            </div>
          </div>
          <div className="w-1/5 task-cards">
            <div className="size-8 bg-linear-to-tr  from-green-600 to-green-400 rounded-lg text-xl text-white flex-center">
              <IoMdCheckmark />
            </div>
            <div className="text-sm font-heading">
              <h1>Completed</h1>
              <p> {tasks.isCompleted.length || 0} </p>
            </div>
          </div>
          <div className="w-1/5 task-cards">
            <div className="size-8 bg-linear-to-tr  from-red-600 to-red-400 rounded-lg text-sm  text-white flex-center">
              <FaExclamation />
            </div>
            <div className="text-sm font-heading">
              <h1>Overdue</h1>
              <p> {tasks.overdueTasks.length || 0} </p>
            </div>
          </div>
          <div className="w-2/5 task-cards">
            <div className="size-8 bg-linear-to-tr  from-yellow-500 to-yellow-300 rounded-lg text-xl text-white flex-center">
              <HiArrowTrendingUp />
            </div>
            <div className="text-sm font-heading">
              <h1>Productivity</h1>
              <p>
                {(tasks.isCompleted.length /
                  (tasks.pendingTasks.length +
                    tasks.overdueTasks.length +
                    tasks.isCompleted.length)) *
                  100 || 0}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 px-5 flex gap-2 justify-end">
        <p className="text-base font-body pt-1.5 h-fit">{user.username}</p>
        <a href="/profile">
          <div className="size-12 lg:size-10 rounded-full overflow-hidden bg-[#dad0ff] cursor-pointer flex-center border-2 border-[#336fe8ba]">
            <img
              src={avatar}
              className="size-14 object-scale-down"
              alt=""
            />
          </div>
        </a>
        <FaCaretDown color={"#3b73e3"} className="cursor-pointer mt-2" />
      </div>
    </div>
  );
};

export default Head;
