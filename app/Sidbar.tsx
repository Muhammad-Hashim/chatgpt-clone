"use client"
import React, {useState} from "react";
import { GrAdd } from "react-icons/Gr";
import { BsLayoutSidebarInset, BsReverseLayoutSidebarInsetReverse } from "react-icons/Bs";
export default function Sidebar() {
   const [isChatShow, setisChatShow] = useState(true)

  return (
    <>
      {
        isChatShow ? (
            <div className="w-[252px] h-screen  bg-black">
        <div className="flex w-[245px] h-12 gap-3 items-center   text-white">
          <button className="flex w-[200px] mt-3 rounded-[5px] justify-start items-center text-[14px] border border-solid px-2 py-2  text-center border-gray-600 gap-2">
            <GrAdd color="white" /> <b>+</b> New Chat
          </button>
          <div className="flex justify-center items-center mt-3 " onClick={()=>setisChatShow(false)} >
            <BsLayoutSidebarInset size={16}  className=" "/>
          </div>
        </div>
      </div>
        ): <BsReverseLayoutSidebarInsetReverse className="m-4" size={20} color="gray" onClick={()=>setisChatShow(true)}/>
        
      }
    </>
  );
}

