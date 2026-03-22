import React from "react";
import { CiCalendar } from "react-icons/ci";
import { useTask } from "../hooks/useTask";
import { useNavigate } from "react-router";
import { IoMdCheckmark } from "react-icons/io";


function formatMongoDate(mongoDate) {
  const date = new Date(mongoDate);

  return (
    date.getDate() +
    " " +
    date.toLocaleString("default", { month: "short" }) +
    " " +
    date.getFullYear()
  );
}

const TaskCard = ({ task, index }) => {
  const { handleStatusUpdate } = useTask();
  const navigate = useNavigate();
  const handleCheck = async() => {
    try {
      await handleStatusUpdate({ id: task._id });
      navigate("/dashboard");
    } catch (error) {
      console.log("Error While Updating Task: ", error);
    }
  };
  return (
    <div
      className="w-full bg-white shadow-created py-2 px-3 rounded-md relative flex gap-3 group transition-all duration-300 cursor-pointer mb-3"
      key={index}
    >
      {/* <input
        type="checkbox"
        className="self-start mt-[5px] cursor-pointer p-1 text-green-700"
        name=""
        id=""
        checked={task.isCompleted}
        onClick={handleCheck}
      /> */}
      <div className={`size-4 border-2 ${task.priority === "high" ? "border-red-600 " : task.priority === "medium" ? "border-yellow-500 " : "border-green-500"} ${task.isCompleted ? "bg-green-500 border-green-500! " : ""} rounded-[4px] mt-1  flex-center text-white`} onClick={handleCheck}>
        {task.isCompleted && <IoMdCheckmark />}
      </div>
      <div className={`absolute top-0 right-0 text-xs px-2 py-1 rounded-md translate-y-3/10 -translate-x-2/10 bg-linear-to-br ${task.priority === "high" ? "from-red-600 to-red-400" : task.priority === "medium" ? "from-yellow-500 to-yellow-300" : "from-green-500 to-green-300"} font-heading text-white `}>
        {task.priority}
      </div>
      <div className="">
        <h1 className="font-body text-sm">{task.title}</h1>
        <div className="flex items-center gap-1 text-xs py-2 font-heading capitalize text-[#333]">
          <CiCalendar />
          <p>{formatMongoDate(task.dueDate)}</p>
        </div>
        <p className="font-body text-xs hidden group-hover:block">
          {task.description}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
