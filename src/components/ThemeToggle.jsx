import { Moon, Sun } from "lucide-react";
import React, { useState,useEffect } from "react";
// import { cn } from "../lib/utils";
import {cn} from "@/lib/utils"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === null) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
   
    
   // EMPTY DEPENDENCY RUNS ONLY ONCE
  
  const toggleTheme=() =>{
    if(isDarkMode){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
        setIsDarkMode(false);
    }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
        setIsDarkMode(true)
    }
  }
  return (
    <div>
      <button onClick={toggleTheme}
      className={cn("fixed max-sm:hidden top-2 right-5 z-50 p-2 rounded-full transition-colors duration-300 cursor-pointer",
        "focus:outline-hidden"
      )}
      
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-pink-900" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
