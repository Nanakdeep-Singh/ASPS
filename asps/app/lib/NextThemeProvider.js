"use client"
import { ThemeProvider } from "next-themes"

export default function NextThemeProvider(props) {
  return (
    <div>
        <ThemeProvider attribute="class">
            {props.children}
        </ThemeProvider>
    </div>
  )
}
