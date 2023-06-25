"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Astronaut() {

  return (
    <div className=" w-full absolute flex justify-center -z-10">
      <motion.div className="absolute -top-28 w-fit"
      animate={{
        y:[0,50,0]
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat:Infinity
      }}>
      <Image src="/astro.svg" height={1000} width={1000}></Image>
      </motion.div>
    </div>
  )
}