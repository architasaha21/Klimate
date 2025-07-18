import { Link } from 'react-router-dom';
import { useTheme } from '../context/theme-provider';
import { Sun, Moon } from 'lucide-react';
import { CitySearch } from "./citysearch";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
            <img 
                src={isDark ? "/logo.png" : "/logo2.png"}
                alt="Klimate Logo" 
                className="h-14"
            />
        </Link>

        <div className="flex gap-4">
            <CitySearch />
            {/* {theme toggle} */}
            <div onClick={() => setTheme(isDark? "light" : "dark")}
                className={`flex cursor-pointer items-center justify-center rounded-full p-2  hover:bg-gray-200 dark:hover:bg-gray-800 transition-transform duration-500
                    ${isDark ? "rotate-180" : "rotate-0"}
                    `}
                >
                {isDark? (
                    <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
                ):(
                     <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
                )}
            </div>
        </div>
    </div>
  </header>
  )
}

