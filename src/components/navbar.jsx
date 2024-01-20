import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="z-30 flex font-semibold text-white items-center justify-between max-sm:justify-end border-2 border-[rgb(182,182,182,0.5)] backdrop-blur bg-[rgb(182,182,182,0.2)] shadow-inset rounded-lg px-10 max-sm:px-6 fixed mt-10 w-full max-w-[calc(100%-64px)] mx-8">
      <Link to="/" className="max-sm:hidden">Homepage</Link>
      <div className="flex items-center gap-[22px] max-sm:gap-4">
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link className="" to={"/signin"}>
            Login
          </Link>
        )}
        {user ? (
          <Link to={"/history"} className="border-2 border-white rounded-lg py-[2px] px-[14px] bg-transparent my-3">
            History
          </Link>
        ) : (
          <Link
            to={"/signup"}
            className="border-2 border-white rounded-lg py-[2px] px-[14px] bg-transparent my-3"
          >
            Create Account
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
