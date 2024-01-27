import { useLocation } from "react-router-dom";
import { navItems } from "../lib/data/navdata";
import { ArrowDown2, Calendar, Notification, SearchNormal1 } from "iconsax-react";
import { Button } from "./ui/button";
import { user } from "../assets";
import { useState } from "react";
import { UserMenu } from ".";

export default function Navbar() {
  const [toggleUserMenu, setToggleUserMenu] = useState(false)
  const location = useLocation()
  const date = new Date()

  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDate()
  const year = date.getFullYear()

  const currentDate = `${month} ${day}, ${year}`
  return (
    <nav className="bg-sidebar-background font-inter border-b border-[#E5EAEF] lg:flex hidden">
      <div className="flex items-center justify-between w-[95%] mx-auto py-[18px]">
        <h1 className="font-pjs text-xl font-semibold">{navItems.map((item) => (
        <span key={item.id}>{ location.pathname === item.to && item.name}</span>
      ))}</h1>
      <div className="flex items-center gap-x-9">
        <div className="flex items-center bg-background gap-x-2 h-12 rounded-[24px] pl-4 border border-[#DADDDD]">
          <label htmlFor="search">
            <SearchNormal1 size="18" color="#78828A" variant="Outline" />
          </label>
          <input type="text" placeholder="Search"
            className="bg-transparent outline-none border-none" />
        </div>
        <div className="flex items-center gap-x-[10px] font-medium text-sm">
          <Calendar size="20" className="text-foreground" />
          <p>{ currentDate}</p>
        </div>

        <Button variant={"outline"} className="rounded-full p-[9px] bg-transparent">
        <Notification size="20" className="text-foreground"/>
        </Button>

        <button onClick={() => setToggleUserMenu(prev => !prev)} className="bg-transparent py-1 px-2 rounded-[28px] flex items-center gap-x-2 border border-[#DADDDD]">
          <img src={user} alt="user" className="w-[38px] h-[38px]" />
          <p className="flex flex-col items-end pr-1">
            <span className="text-base">Justin Bergson</span>
            <span className="text-sm text-foreground/50">Justin@gmail.com</span>
          </p>
          <ArrowDown2 size="20" className="text-foreground"/>
        </button>
      </div>
      </div>
      {toggleUserMenu && <UserMenu/>}
    </nav>
  )
}
