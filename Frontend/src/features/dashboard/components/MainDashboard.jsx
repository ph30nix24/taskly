import React from 'react'
import TaskCard from './TaskCard'
import { GoPlus } from "react-icons/go";


const MainDashboard = ({setIsFormClick, tasks, filteredTasks}) => {
  return (
    <div className='w-full mt-10 h-[calc(100%-200px)] [box-shadow:_0_4px_8px_#3b73e33e] rounded-lg bg-white/20  flex relative z-20'>
      <div className='w-1/4 px-5 p-5 rounded-xl '>
        <h1 className='font-body text-base flex items-center gap-3 font-medium pl-2 mb-5'>
          In Progress <span className=' rounded-full bg-gray-300 size-5 text-xs flex-center text-gray-700'>{filteredTasks.pendingTasks.length}</span>
        </h1>
        {filteredTasks.pendingTasks.map((task, key) => (
          <TaskCard task={task} key={key}  />
        ))}
      </div>
      <div className='w-1/4 px-5 p-5 rounded-xl'>
        <h1 className='font-body text-base flex items-center  font-medium gap-3 pl-2 mb-5'>
          Over Due <span className=' rounded-full bg-gray-300 size-5 flex-center text-gray-700 text-xs'>{filteredTasks.overdueTasks.length}</span>
        </h1>
        {filteredTasks.overdueTasks.map((task, index) => (
          <TaskCard task={task} key={index}  />
        ))}
      </div>
      <div className='w-1/4 px-5  p-5 rounded-xl'>
        <h1 className='font-body text-base flex items-center  font-medium gap-3 pl-2 mb-5'>
          Completed <span className=' rounded-full bg-gray-300 size-5 flex-center text-gray-700 text-xs'>{filteredTasks.isCompleted.length}</span>
        </h1>
        {filteredTasks.isCompleted.map((task, index) => (
          <TaskCard task={task} key={index}  />
        ))}
      </div>
      <div className='w-1/4 px-5 p-5 rounded-xl'>
        <h1 className='font-body text-base flex items-center  font-medium gap-3 pl-2 mb-5'>
          Recent
        </h1>
        <div className='w-full h-[calc(100%-120px)] overflow-y-auto [&::-webkit-scrollbar]:hidden'>
          {tasks.map((task, index) => (
            <TaskCard task={task} key={index} />
          ))}
        </div>
          <button className='btn flex gap-3 bg-linear-to-br  from-primary to-blue-400 text-white mt-5 justify-self-end' onClick={() => setIsFormClick(prev => !prev)}>
            <GoPlus size={20} />
            <p>Add Task</p>
          </button>
      </div>
    </div>
  )
}

export default MainDashboard