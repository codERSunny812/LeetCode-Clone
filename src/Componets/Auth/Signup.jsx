import React from "react";
import Logo from "../../assets/LeetCode_logo.png";
import { FaGithub } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Signup = () => {
  return (
    <>
      <div className="h-screen w-full  bg-[#eceff1] flex justify-center">
        <div className="  flex flex-col gap-3 items-center bg-white w-[400px] h-full">
          <img src={Logo} alt="leetcode logo" className="h-20 my-6" />
          <h1 className="font-mono text-lg capitalize">leetcode</h1>

          <input
            type="text"
            name=""
            id=""
            placeholder="username"
                      className="my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 hover:border-black  rounded-md outline-orange-300 outline-offset-2"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
                      className=" my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black  outline-orange-300 outline-offset-2"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="confirm password"
                      className="my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
                      className="my-2 p-2 w-[340px] h-[41px] capitalize border border-slate-200 rounded-md hover:border-black outline-orange-300 outline-offset-2"
          />
                  <button className="capitalize  w-[340px] h-[41px] bg-gradient-to-r from-gray-600 via-slate-500 to-gray-400 text-white my-2">sign up</button>
          <h3 className=' text-gray-400 my-2 '>
            Have an account? <span className="text-blue-500 capitalize">sign in</span>
          </h3>

          <h4 className="text-gray-400 my-2">our you can sign in with </h4>
                  <div className="flex gap-5 ">
                      <FaGithub className="h-7 w-7 icon-1 text-gray-600 hover:text-black my-2" />
                      <FaGooglePlus className="h-7 w-7 text-gray-600 hover:text-red-500 my-2" />
                      <FaTwitter className="h-7 w-7 text-gray-600 hover:text-blue-400 my-2" />
                  </div>
          

          <h3 className="capitalize  text-gray-400 flex-wrap text-center text-sm ">
            This site is protected by re <span className="uppercase">captcha</span> and the google
            privacy policy and term of service apply
          </h3>
        </div>
      </div>
    </>
  );
};

export default Signup;