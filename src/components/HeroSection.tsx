'use client'
import Link from "next/link"

import Lamp from './Lamp'
import Table from "./Table"


function HeroSection() {
  return (
   <>
    
    <div className="sm:h-[500px] h-[530px] mt-5 sm:mt-0">
      
    <Lamp/>
    </div>
    <Table/>
   
   </>
  )
}

export default HeroSection
