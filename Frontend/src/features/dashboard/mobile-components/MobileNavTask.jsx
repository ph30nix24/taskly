import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { useAuth } from "../../auth/hooks/useAuth";

const MobileNavTask = () => {
  const { avatar } = useAuth();
  return (
    <div className="w-full px-5 py-3 h-fit relative z-10 flex justify-between ">
      <div className="flex gap-3 items-center">
        <div className="bg-blue-500 size-4 flex-center rounded-br-md rounded-tl-md -skew-3 text-white">
          <IoMdCheckmark size={12} />
        </div>
        <h1 className="text-gray-200 font-body text-xl">Taskly</h1>
      </div>
      <a href="/profile">
        <div className="size-12 lg:size-10 rounded-full overflow-hidden bg-[#dad0ff] cursor-pointer flex-center border-2 border-[#336fe8ba]">
          <img
            src={avatar}
            className="size-14 object-scale-down"
            alt=""
          />
        </div>
      </a>
    </div>
  );
};

export default MobileNavTask;
