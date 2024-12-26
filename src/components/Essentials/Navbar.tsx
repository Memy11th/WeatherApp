import { Heart } from "lucide-react";
import SearchBar from "../ِAtoms/SearchBar";
import ThemeToggle from "../ِAtoms/ThemeToggle";
import { NavLink, useNavigate } from "react-router-dom";
export function Navbar() {
  const Tabs = [
      {
        name:'Favorites',
        url:'/favorites',
        icon : <Heart className="h-4 w-4"/>
      }
  ]
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/')
  }

  return (
    <>
      <header className={`flex justify-between items-center p-4 z-50  w-full sticky top-0  backdrop-blur-sm  supports-[backdrop-filter]:bg-background/60 ]  `}  >
        <div className="flex justify-start items-center gap-4">
          <h5 onClick={handleClick} className="font-bold cursor-pointer "> M11 weather</h5>
          {Tabs.map((tab, index) => (
            <NavLink key={index} to={tab.url} className={({isActive})=>isActive ? 'text-foreground font-semibold border-b-2 dark:border-blue-700 border-slate-800/35  ' : 'text-muted-foreground'}>
              {tab.name}
            </NavLink>
          ))}
        </div>
        <div  className="flex justify-center items-center gap-4">
          <SearchBar />
          <ThemeToggle />
        </div>

      </header>
    </>
  );
}