"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Logo() {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
  return (
    <>
       {theme=="dark"?<Image src="/ASPS-1.png" width={160} height={112} alt="Error"></Image>:<Image src={"/ASPS-2.png"} width={160} height={112} alt="Error"></Image>}
    </>
  )
}
