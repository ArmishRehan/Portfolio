import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience"},
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "MartialArts", href: "#martial-arts" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);


    useEffect(() => {
        const handeScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handeScroll);
        return () => window.removeEventListener("scroll", handeScroll);

    }, []);


    
    return (
        <nav className={cn("fixed w-full transition-all duration-300 z-40",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>

            <div className="container flex items-center justify-between ">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="realtive z-10">
                        <span className="text-glow text-foreground">Armish Rehan</span> Portfolio
                    </span>
                </a>

                {/* desktop view */}

                <div className="hidden md:flex space-x-8 px-5">
                    {navItems.map((item, key) => (
                        <a href={item.href} key={key} className=" hover:text-primary transition-colors duration-300 ">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile view */}

                <button onClick={() => setIsMenuOpened((prev) => !prev)} 
                        className="md:hidden p-2 text-foreground z-50"
                        aria-label={isMenuOpened ? "Close Menu" : "Open Menu"}>
                    {isMenuOpened ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center",
                    "justify-center transition-all duration-300 md:hidden",
                    isMenuOpened ? "opactity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>

                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a href={item.href} key={key} className=" hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpened(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    )
}