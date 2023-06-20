"use client"
import ThemeToggle from "./ThemeToggle"
import Logo from "./Logo"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className=" mx-8 mt-11 flex items-center justify-between z-20">
        <div className="w-40 h-28">
            <Logo></Logo>
        </div>
        <div className="w-1/2 flex items-center">
            <Link className="h-full px-6 text-lg" href="/">Home</Link>
            <Link className="h-full px-6 text-lg" href="#">About</Link>
            <Link className="h-full px-6 text-lg" href="#" >Blogs</Link>
        </div>
        <div className="grow flex justify-end items-center">
        <Link className="h-full px-6 text-lg  text-purple-500 hover:text-purple-800 dark:text-emerald-300 dark:hover:text-emerald-500" href="/login">Sign in</Link>
        <Link className="h-full px-6 text-lg text-purple-500 hover:text-purple-800 dark:text-emerald-300 dark:hover:text-emerald-500" href="#">Register</Link>
        <div className=" px-6">
        <ThemeToggle></ThemeToggle>
        </div>
        </div>
    </div>
  )
}
