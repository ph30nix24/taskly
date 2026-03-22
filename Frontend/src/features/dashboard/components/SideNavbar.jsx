import React from 'react'
import { RiDashboardLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { useAuth } from '../../auth/hooks/useAuth';


const SideNavbar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();
  const handleLogin = async () => {
    try {
      await handleLogout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-60 h-full bg-gradient px-2 py-10 flex flex-col justify-between pr-4 relative z-20">
      <div>
        <div className="flex gap-5 items-center w-full pl-5 mb-10">
          <div className="bg-blue-500 size-6 flex-center rounded-br-md rounded-tl-md -skew-3 text-white">
            <IoMdCheckmark />
          </div>
          <h1 className="text-white font-body text-2xl">Taskly</h1>
        </div>
        <div className="w-full h-fit text-white text-xl flex items-center gap-2 font-heading bg-white/10 p-2 pl-4 rounded-xl hover:shadow-md ">
          <RiDashboardLine />
          <p className="text-lg ">Dashboard</p>
        </div>
      </div>
      <div className="w-full px-5 pr-7">
        <hr className="mt-10 mb-5 text-white" />
        <div className="w-full h-fit text-white text-xl flex items-center gap-2 font-heading hover:bg-white/10 p-2 pl-4 rounded-xl cursor-pointer" onClick={handleLogin}>
          <CiLogout />
          <p className="text-lg ">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
