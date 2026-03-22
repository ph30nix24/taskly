import React, { useRef, useState } from "react";
import { IoIosCamera } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TfiFaceSmile } from "react-icons/tfi";
import { useNavigate } from "react-router";

const AvatarForm = ({
  setUpdateAvatarClick,
  avatar,
  setAvatar,
  loading,
  handleUpdateAvatar,
}) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const avatarsImg = [
    "./imgs/profileIcon0.png",
    "./imgs/profileIcon1.png",
    "./imgs/profileIcon2.png",
    "./imgs/profileIcon3.png",
    "./imgs/profileIcon4.png",
  ];
  const handleClick = () => inputRef.current?.click();
  const [image, setImage] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      try {
        await handleUpdateAvatar({ image: avatar });
        navigate("/profile");
        setUpdateAvatarClick(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("image Selected");
    }
  };
  if(loading) {
    return (
      <main className="w-full h-screen flex-center">
        <Loader />
      </main>
    )
  }
  return (
    <form
      className="w-full lg:w-180 py-5 rounded-xl bg-linear-to-br from-55% from-[#FFFFFF] to-[#ecebf9] relative overflow-hidden "
      onSubmit={handleSubmit}
    >
      <img
        src="./imgs/avatarBg.png"
        className="w-full h-full absolute top-0 left-0 object-cover opacity-80 z-1"
        alt=""
      />
      <h1 className="w-full text-center font-body font-medium text-[4.5vw] lg:text-2xl text-[#444] relative z-2">
        Update Avatar
      </h1>
      <p className="w-full text-center font-body text-[2.9vw] lg:text-base text-[#444] pt-1 lg:pt-2 relative z-2">
        Change your profile picture
      </p>
      <hr className="text-slate-200 my-5 relative z-2" />
      <div className="w-full px-10 flex flex-col lg:flex-row gap-5 items-center relative z-2">
        <div className="size-fit px-8 py-5 rounded-xl shadow-bg bg-white relative">
          <div className="size-40 rounded-full bg-[#dad0ff] overflow-hidden relative z-2">
            <img src={avatar} className="size-45 object-cover" alt="" />
          </div>
          <div className="absolute bottom-0 -translate-y-1/2 right-0 -translate-x-1/2 size-12 bg-white rounded-full shadow-bg z-5 flex-center">
            <IoIosCamera className="size-8 text-purple-500" />
          </div>
        </div>
        <div className="w-full lg:w-[calc(100%-220px)] h-fit px-5 py-2 rounded-xl shadow-bg bg-white relative">
          <input
            ref={inputRef}
            onChange={handleFileChange}
            type="file"
            className="hidden"
          />
          <div
            className="w-full bg-linear-to-r from-75% from-purple-500 to-purple-400 py-3 font-body text-sm text-white capitalize rounded-2xl flex-center gap-2 cursor-pointer mt-3"
            onClick={handleClick}
          >
            <FaCloudUploadAlt className="size-4 lg:size-6" />
            <p className="text-[2.8vw] lg:text-base">upload new</p>
          </div>
          <div className="w-full bg-white py-3 font-body  text-[#555] capitalize rounded-2xl flex-center gap-2 pointer-events-none border-slate-200 border-2 mt-3">
            <TfiFaceSmile className="size-4 lg:size-6" />
            <p className="text-[2.8vw] lg:text-base">choose avatar</p>
          </div>
          <p className="mt-4 lg:mt-8 pb-3 font-body font-medium text-[#555] capitalize text-sm">
            recent avatars
          </p>
          <div className="w-full gap-4 flex-center pb-3">
            {avatarsImg.map((item, index) => (
              <div
                className="avatar-card"
                onClick={() => setAvatar(item)}
                key={index}
              >
                <img src={item} className="avatar-img" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="text-slate-200 my-5 relative z-2" />
      <div className="w-full px-5 pt-2 flex-center gap-5 relative z-2">
        <button
          className="btn border-1 border-slate-300 text-sm hover:bg-linear-to-r hover:from-[#9c60eb] hover:to-[#c396fd] hover:text-white transition-smooth text-[2.4vw]! lg:text-sm!"
          onClick={() => setUpdateAvatarClick(false)}
        >
          Cancel
        </button>
        <button className="btn  border-slate-300 text-sm bg-linear-to-r from-[#9c60eb] to-[#c396fd] text-white transition-smooth text-[2.4vw]! lg:text-sm!">
          Save Changes
        </button>
      </div>
    </form>
  );
};
export default AvatarForm;
