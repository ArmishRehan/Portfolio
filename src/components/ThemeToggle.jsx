import { useState } from "react";

export const ThemeToggle = () =>{

    const [isDarkMode, setIsDarkMode] = useState(false);
    // for letting the browser remember to not change the theme when reloads
    useState( ()=>{
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "dark"){
            setIsDarkMode("true");
            document.documentElement.classList.add("dark");
        }else{
            localStorage.setItem("theme" , "light"); 
            setIsDarkMode(false);
        }
     } ,[]);

    const toggleTheme = () =>{
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme" , "light"); // saving in local storage to remeber which theme we are on
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
            setIsDarkMode(true);
        }
    };

    return 
};