import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import TaskCard from "../components/TaskCard";
const TaskDashMob = ({ setIsFormClick, tasks }) => {
  const types = [
    {
      title: "In Progress",
      count: tasks.pendingTasks.length,
      task: tasks.pendingTasks 
    },
    {
      title: "Over Due",
      count: tasks.overdueTasks.length,
      task: tasks.overdueTasks
    },
    {
      title: "Completed",
      count: tasks.isCompleted.length,
      task: tasks.isCompleted
    },
  ];
  const [current, setCurrent] = useState("In Progress");
  return (
    <div className="relative z-20 mt-3 w-full h-[calc(100%-220px)]">
      <div className="bg-white/90 rounded-xl px-3 py-2 flex gap-2 shadow">
        {types.map((type, index) => (
          <div
            key={index}
            onClick={() => setCurrent(type.title)}
            className={`w-1/3 text-xs font-body text-center px-2 py-2 rounded-xl cursor-pointer ${current === type.title ? "bg-primary text-white" : ""} flex-center gap-1 `}
          >
            {type.title}
            <span className="size-3 flex-center bg-gray-100 text-[8px] rounded-full text-gray-800 shadow">
              {type.count}
            </span>
          </div>
        ))}
      </div>
      <div className="pt-5 w-full">
        <h1 className="text-sm  font-body text-slate-800 font-medium flex items-center gap-3">
          {current}{" "}
          <span className="size-4 mt-1 flex-center bg-gray-300 text-[8px] rounded-full text-gray-800 shadow">{types.find((type) => type.title === current).count}</span>
        </h1>
      </div>
      <div className="w-full h-[calc(100%-108px)] py-5 ">
        {types.find((type) => type.title === current).task.map((task, index) => (
          <TaskCard task={task} key={index}  />
        ))}
      </div>
      <div className="absolute flex items-center font-body bottom-0 right-0 -translate-x-[30px] -translate-y-[100%] cursor-pointer">
        <button
          className="group gap-3 bg-linear-to-br from-primary to-blue-400 rounded-full p-2 text-white flex items-center cursor-pointer" 
          onClick={() => setIsFormClick((prev) => !prev)}
        >
          <GoPlus size={20} />
          <p className="hidden group-hover:block group-hover:pr-3 text-sm">Add Task</p>
        </button>
      </div>
    </div>
  );
};

export default TaskDashMob;
