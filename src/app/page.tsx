'use client'
import HeroSection from "@/components/HeroSection";
import React, { useEffect, useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'

export default function Home() {
    
    // const { width, height } = useWindowSize()
  return (
    
   <>
    
       
     
    <main className="bg-slate-950">
    {/* <Confetti width={width} height={height} recycle={false}  className="hidden sm:block"/> */}
    {/* <Confetti className="hidden md:block" width={1500}
        height={1500}   /> */}
    
     <div className="">
     
     <HeroSection/>
     </div>
     <footer className=" flex justify-center text-center items-center my-10 gap-1 text-slate-300">
     <span>Made With</span>
     <span className="text-red-600 text-2xl ">&#10084;</span>
     <span> by</span>
     
     <a href="https://www.linkedin.com/in/apurvsprofile/ " className="hover:scale-105  duration-200"><span className="text-cyan-400 "> Apurv Gore</span></a>
     </footer>
     
    </main>
   </>
  );
}
