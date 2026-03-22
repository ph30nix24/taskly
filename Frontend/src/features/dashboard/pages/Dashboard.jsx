import { useEffect, useState } from "react";
import Head from "../components/Head";
import MainDashboard from "../components/MainDashboard";
import SideNavbar from "../components/SideNavbar";
import TaskForm from "../components/TaskForm";
import TaskDashMob from "../mobile-components/TaskDashMob";
import MoblieHead from "../mobile-components/MoblieHead";
import MobileNavTask from "../mobile-components/MobileNavTask";
import Loader from "../../../Loader";
import { useTask } from "../hooks/useTask";
import { filterTask } from "../../../Constant";

function useWindowWidth(breakpoint = 768) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { isMobile: width < breakpoint };
}


const Dashboard = () => {
  const { tasks, loading } = useTask();
  const filterTasks = filterTask(tasks);
  const [isFormClick, setIsFormClick] = useState(false);
  const { isMobile } = useWindowWidth();

  if(loading) {
    return ( 
      <main className="w-full h-screen flex-center"><Loader /></main>
    )
  }
  return (
    <main className="w-full h-dvh block lg:flex [background:_linear-gradient(22deg,rgba(2,_121,_247,_0.32)_20%,_rgba(2,_121,_247,_0.05)_70%) ] relative overflow-hidden">
      <img
        src="./imgs/formBg.png"
        className={`absolute z-1 ${isMobile ? "size-full object-cover " : ""}`}
        alt=""
      />
      {isMobile && (
        <div className="size-full bg-linear-to-t from-transparent to-blue-900 from-75% absolute z-2 opacity-60 "></div>
      )}
      {isFormClick && (
        <div className="w-full h-full absolute top-0 left-0 z-50 bg-black/20 flex-center backdrop-blur-sm">
          <TaskForm setIsFormClick={setIsFormClick} />
        </div>
      )}
      {isMobile ? <MobileNavTask /> : <SideNavbar />}
      <div className="w-full h-full py-5 px-5 lg:px-10  relative">
        {isMobile ? <MoblieHead tasks={filterTasks} /> : <Head tasks={filterTasks} />}
        {isMobile ? (
          <TaskDashMob setIsFormClick={setIsFormClick} tasks={filterTasks} />
        ) : (
          <MainDashboard setIsFormClick={setIsFormClick} tasks={tasks} filteredTasks={filterTasks} />
        )}
      </div>
    </main>
  );
};

export default Dashboard;
