"use client"

import Image from 'next/image'
import { FaLock } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/Bs";
import { IoSend } from "react-icons/io5";
import React, {useState} from "react";

export default function Home() {
  const [query, setquery] = useState("")
  return (
    <main className="flex  justify-between h-screen flex-col  items-center ">
         <div className="h-12 w-[280px] mt-6 bg-[#ECECF1] flex justify-around items-center  rounded-[6px] " >
         <h1 className="color-black py-2 px-6 rounded-[7px] bg-white  flex justify-center gap-x-2 items-center">
         <BsLightningChargeFill  color="green" />
          GPT-3.5</h1>
         <h1 className="color-black  px-6    text-[20spx] flex justify-center items-center gap-x-2">GPT-4
         <FaLock/>
         </h1>
         </div>



         <div className="justify-items-end mb-6 rounded-2xl shadow-3xl	 px-6 py-1  ">
          <input  className=" focus:outline-none py-2 py-3 w-[600px]" onChange={(e)=>setquery(e.target.value)} type="text" placeholder='Enter the calue ' />
          <button disabled={!query}  className="p-2" ><IoSend color={!query ? "gray" :"green"  } size={25}/> </button>
         </div>
    </main>
  )
}
