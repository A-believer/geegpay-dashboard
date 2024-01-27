import { NavLink, useLocation } from "react-router-dom";
import { Logo, border } from "../assets";
import { ArrowCircleRight2, ArrowLeft2, Logout, Moon, Setting2, Sun1, } from "iconsax-react";
import { useTheme } from "./provider/theme-provider";
import { Button } from "./ui/button";
import { navItems } from "..//lib/data/navdata";


export default function SidebarMobile({closeSidebar}: {closeSidebar: () => void}) {
  const { theme, setTheme } = useTheme()
  const location = useLocation()
  
  return (
      <nav className="w-[25%] absolute flex flex-col items-center gap-y-3 py-3 border overflow-hidden h-screen bg-sidebar-background">
          <button className="relative w-full flex justify-center items-center" onClick={closeSidebar}>
              <ArrowLeft2 size="18" className="absolute left-0 font-black"/>
            <img src={Logo} alt="logo" className="w-9 h-9 object-contain"/>
          </button>   
      <div className="flex flex-col items-center overflow-y-scroll no-scrollbar w-full">
        <div className="flex flex-col items-center gap-y-3 w-full py-4">
          {navItems.map((item) => (
            <NavLink onClick={closeSidebar} to={item.to} className={`flex items-center justify-center relative w-full p-2 ${location.pathname === item.to && theme === "dark" && "bg-[#34CAA5]"}`}>
              {location.pathname === item.to ? item.activeIcon : item.inActiveIcon}
              {location.pathname === item.to &&
                <img src={border} alt="border" className="absolute top-2.5 right-0" />}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col items-center gap-y-4 p-2 mx-5 rounded-[100px] bg-background mb-5">
          <Button onClick={() => setTheme("light")} variant={"ghost"} className={`w-fit mx-auto p-2 rounded-full ${theme === "light" && "bg-[#34CAA5]"}`}>
            <Sun1 size="24" color={theme === "light" ? "#FFFFFF" : "#B2ABAB"} variant="Bold"/>
          </Button>
          
          <Button onClick={() => setTheme("dark")} variant={"ghost"} className={`w-fit mx-auto p-2 rounded-full ${theme === "dark" && "bg-[#34CAA5]"}`}>
            <Moon size="24" color={theme === "dark" ? "#FFFFFF" : "#B2ABAB"} variant="Bold"/>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <Button variant={"ghost"}>
            <ArrowCircleRight2 size="24" color= "#B2ABAB" variant="Broken"/>
          </Button>
          <Button variant={"ghost"}>
            <Setting2 size="24" color="#B2ABAB" variant="Broken" />
          </Button>
          <Button variant={"ghost"}>
            <Logout size="24" color="#B2ABAB" variant="Broken"/>
          </Button>
        </div>
      </div> 
    </nav>
  )
}
