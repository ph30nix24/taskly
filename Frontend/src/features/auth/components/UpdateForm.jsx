import React, { useState } from "react";
import { PiAtLight } from "react-icons/pi";
import { HiUser } from "react-icons/hi2";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import Loader from "../../../Loader";

const UpdateForm = ({ setIsClicked, avatar }) => {
  const { handleInfoUpdate, loading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    name: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }
  if(loading) {
    return (
      <main className="w-full h-screen flex-center"><Loader /></main>
    )
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await handleInfoUpdate({ username: formData.username, name: formData.name });
      navigate('/profile');
      setIsClicked(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className="w-120 px-10 py-5 bg-white rounded-2xl pt-25 pb-10 relative z-20 overfl" onSubmit={handleSubmit}>
      <img
        src="./imgs/avatarBg.png"
        className="absolute size-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-2xl opacity-70"
        alt=""
      />

      <div className="size-30 rounded-full absolute top-0 border-4 border-white -translate-y-1/2 left-1/2 bg-purple-100 -translate-x-1/2 flex-center overflow-hidden">
        <img src={avatar} className="size-32 object-scale-down" alt="" />
      </div>
      <h1 className="font-heading text-2xl text-[#444] text-center capitalize relative z-5">
        Edit your profile
      </h1>
      <p className="font-heading text-base text-center text-[#555] pt-1 mb-6 relative z-5">
        Enter your name and username
      </p>
      <fieldset className="field-set relative z-5">
        <label
          htmlFor="name"
          className="size-8 rounded-full bg-purple-100 flex-center"
        >
          <HiUser className="size-5 text-purple-700" />
        </label>
        <input
          className="field-set-input"
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="field-set relative z-5">
        <label
          htmlFor="username"
          className="size-8 rounded-full bg-purple-100 flex-center"
        >
          <PiAtLight className="size-5 text-purple-700" />
        </label>
        <input
          className="field-set-input"
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />
      </fieldset>
      <button className="w-full btn mt-8 text-white bg-linear-to-r from-15% from-purple-500 to-purple-600 relative z-5">
        Continue
      </button>
      <button className="w-full btn mt-3 text-black hover:bg-linear-to-r hover:from-15% hover:from-purple-500 hover:text-white to-purple-600 relative transition-smooth border-purple-300! z-5" onClick={() => setIsClicked(false)}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateForm;
