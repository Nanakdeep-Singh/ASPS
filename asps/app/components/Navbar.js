"use client"
import { setLazyProp } from "next/dist/server/api-utils"
import Image from "next/image"
import { useEffect,useRef, useState } from "react"
import { useTheme } from "next-themes"
import ThemeToggle from "./ThemeToggle"
import Logo from "./Logo"

export default function Navbar() {

  return (
    <div className=" mx-8 mt-11 flex items-center justify-between">
        <div className="w-40 h-28">
            <Logo></Logo>
        </div>
        <div className="w-1/2 flex items-center">
            <a className="h-full px-6 text-lg">Home</a>
            <a className="h-full px-6 text-lg">About</a>
            <a className="h-full px-6 text-lg">Blogs</a>
        </div>
        <div className="grow flex justify-end items-center">
        <a className="h-full px-6 text-lg  text-purple-500 hover:text-purple-800 dark:text-emerald-300 dark:hover:text-emerald-500">Sign in</a>
        <a className="h-full px-6 text-lg text-purple-500 hover:text-purple-800 dark:text-emerald-300 dark:hover:text-emerald-500">Register</a>
        <div className=" px-6">
        <ThemeToggle></ThemeToggle>
        </div>
        </div>
    </div>
  )
}
