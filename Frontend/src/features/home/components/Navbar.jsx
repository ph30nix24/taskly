import React, { useEffect, useState } from "react";
import { HiUser } from "react-icons/hi2";

const Navbar = ({ user, avatar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isSignedIn = !!user;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="w-full h-fit flex justify-center fixed top-0 left-0 z-50 py-2">
      <div
        className={`w-312 h-fit px-10 py-4 lg:py-3 flex justify-between items-center mx-auto ${isScrolled ? "backdrop-blur-2xl rounded-full bg-white/80 [box-shadow:_0_24px_56px_#3b73e33e]" : "backdrop-blur-none rounded-none bg-transparent"}`}
      >
        <h1 className="font-hero text-primary font-shadow text-[5vw] lg:text-2xl">
          taskly
        </h1>
        {isSignedIn ? (
          <div className="flex gap-4 items-center">
            <p className="font-body text-[3.5vw] lg:text-base text-black hidden lg:block">
              Welcome <span className="text-primary">{user.username}</span>
            </p>
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
        ) : (
          <div className="flex gap-4 items-center">
            <a href="/register">
              <button className="btn bg-white text-black shadow-md hover:bg-primary hover:text-white">
                sign up
              </button>
            </a>
            <a href="/login">
              <button className="btn bg-[#336fe8ba] text-white hover:bg-primary">
                log in
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
