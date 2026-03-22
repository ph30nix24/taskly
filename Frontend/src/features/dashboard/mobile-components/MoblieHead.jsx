import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { FaExclamation } from "react-icons/fa";
import { HiArrowTrendingUp } from "react-icons/hi2";
const MoblieHead = ({ tasks }) => {
  return (
    <div className="w-full relative z-20">
      <div className="px-3 gap-3 w-full flex-center bg-white/80 rounded-full text-gray-700 hover:shadow">
        <CiSearch size={24} />
        <input
          className="px-2 py-2 w-full outline-none text-sm "
          type="text"
          name="search"
          id="search"
          placeholder="search tasks.."
        />
      </div>
      <div className="w-full ">
        <div className="flex w-full gap-3 mt-3">
          <div className="w-1/2 task-cards ">
            <div className="size-8 bg-gradient-to-tr from-primary to-blue-400 rounded-lg  text-xl text-white flex-center">
              <IoMdCheckmark />
            </div>
            <div className="text-sm font-heading">
              <h1>Tasks Pending</h1>
              <p> { tasks.pendingTasks.length || 0} </p>
            </div>
          </div>
          <div className="w-1/2 task-cards">
            <div className="size-8 bg-linear-to-tr  from-green-600 to-green-400 rounded-lg text-xl text-white flex-center">
              <IoMdCheckmark />
            </div>
            <div className="text-sm font-heading">
              <h1>Completed</h1>
              <p> { tasks.isCompleted.length || 0} </p>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-3 mt-2">
          <div className="w-1/2 task-cards">
            <div className="size-8 bg-linear-to-tr  from-red-600 to-red-400 rounded-lg text-sm  text-white flex-center">
              <FaExclamation />
            </div>
            <div className="text-sm font-heading">
              <h1>Overdue</h1>
              <p>{ tasks.overdueTasks.length || 0}</p>
            </div>
          </div>
          <div className="w-1/2 task-cards">
            <div className="size-8 bg-linear-to-tr  from-yellow-500 to-yellow-300 rounded-lg text-xl text-white flex-center">
              <HiArrowTrendingUp />
            </div>
            <div className="text-sm font-heading">
              <h1>Productivity</h1>
              <p>{ (tasks.isCompleted.length / (tasks.pendingTasks.length + tasks.overdueTasks.length + tasks.isCompleted.length))*100 || 0}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoblieHead;
