"use client"
import React, { useState,useEffect } from 'react'
import { useTheme } from "next-themes";
import { Moon,Sun } from 'react-feather';


const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className=' h-min bg-purple-500 dark:bg-emerald-300 hover:bg-purple-400 dark:hover:bg-emerald-500 transition-all duration-100 text-white dark:text-gray-800 px-2 py-2 text-2xl md:text-4xl rounded-lg bottom-32'>
                {theme== "dark"?<Sun/>:<Moon/>}
        </button>
    )
}

export default ThemeToggle
