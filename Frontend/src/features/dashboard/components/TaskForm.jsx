import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useTask } from "../hooks/useTask";
import { useNavigate } from "react-router";


const TaskForm = ({ setIsFormClick }) => {
  const { loading, handleCreateTask } = useTask();
  const [plan, setPlan] = useState("basic");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    description: "",
    priority: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, priority: plan };
    console.log(finalData);
    await handleCreateTask({
      title: formData.title,
      description: formData.description,
      priority: plan,
      dueDate: formData.dueDate,
    });
    navigate("/dashboard");
    setIsFormClick(false);
  };
  if (loading) {
    return (
      <main className="w-90 lg:w-110 flex-center border-2 border-gray-200 rounded-xl relative overflow-hidden h-150">
        <img
          src="./imgs/formBg.png"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80  size-full object-cover z-10"
        />
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <form
      className="w-fit h-fit px-10 py-8 lg:p-10 flex flex-col gap-5 border-2 border-gray-200 rounded-xl relative overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div
        className="absolute right-10 top-10 translate-y-3/10 text-gray-600 hover:text-black z-30 cursor-pointer"
        onClick={() => setIsFormClick((prev) => !prev)}
      >
        <RxCross1 size={18} />
      </div>
      <img
        src="./imgs/formBg.png"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80  size-full object-cover z-10"
      />
      <h1 className="font-heading text-2xl font-medium z-20">
        Add New <span className="text-primary">Task</span>
      </h1>
      <fieldset className="flex flex-col gap-1 z-20">
        <label
          htmlFor="title"
          className="font-medium text-gray-700 text-base font-heading"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-80 lg:w-100 py-2.5 px-4 outline-none rounded-md border border-gray-300 text-sm font-body bg-white/20 shadow"
          placeholder="Enter task title..."
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="flex flex-col z-20">
        <label
          htmlFor="date"
          className="font-medium text-gray-700 text-base font-heading"
        >
          Due Date
        </label>
        <input
          type="date"
          className="w-80 lg:w-100 py-2.5 px-4 outline-none rounded-md border border-gray-300 text-sm font-body bg-white/20 shadow text-[#333333]"
          name="dueDate"
          id="date"
          onChange={handleChange}
          placeholder="select the due date"
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2 z-20">
        <legend className="font-medium text-gray-700 text-base font-heading">
          Choose a priority
        </legend>
        <div className="w-80 lg:w-100 py-2.5  text-sm font-body flex gap-3">
          {["high", "medium", "low"].map((option) => (
            <label
              key={option}
              className={`flex items-center gap-2 cursor-pointer ${option === "high" ? "bg-high" : option === "medium" ? "bg-medium" : "bg-low"} px-3 py-2 pr-5 rounded-lg
              } w-1/3 text-white transition-smooth`}
            >
              <input
                type="radio"
                name="priority"
                value={option}
                checked={plan === option}
                onChange={(e) => setPlan(e.target.value)}
                className="outline-none border-none"
              />
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-1 z-20">
        <label
          htmlFor="description"
          className="font-medium text-gray-700 text-base font-heading"
        >
          Description
        </label>
        <textarea
          className="w-80 lg:w-100 py-2.5 px-4 outline-none rounded-md border border-gray-300 text-sm font-body h-20 bg-white/20 shadow"
          name="description"
          id="description"
          onChange={handleChange}
          rows={5}
        ></textarea>
      </fieldset>
      <fieldset className="w-full flex justify-between gap-5 z-20">
        <button className="btn w-1/2 rounded-lg! bg-white/60 hover:bg-white text-gray-600 ">
          Cancel
        </button>
        <button
          className="btn flex-center gap-1 w-1/2 rounded-lg! btn-bg-primary  text-white"
          type="submit"
        >
          <IoMdCheckmark />
          <p className="">Create Task</p>
        </button>
      </fieldset>
    </form>
  );
};

export default TaskForm;
