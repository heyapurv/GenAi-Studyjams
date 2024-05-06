"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";




export default function LampDemo() {
  return (
    <LampContainer className="-mt-28 sm:-mt-0">
      <div className=" text-white flex">
       
        <div >

            <h2 className="sm:-mt-48 -mt-40 text-xl sm:text-3xl text-center bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text">Google Developer Student Clubs</h2>
            <p className="text-center text-xs sm:text-base bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text">Shri Sant Gajanan Maharaj College of Engineering, Shegaon</p>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="sm:mt-8 mt- bg-gradient-to-br from-slate-300 to-white sm:py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl -mt-10  "
      >
        GEN AI <br /> STUDY JAMS
      </motion.h1>
      
    </LampContainer>
  );
}
