import { Logo, user } from "../assets";
import { ArrowDown2, HambergerMenu, Notification, SearchNormal1 } from "iconsax-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {  SidebarMobile, UserMenu } from ".";


export default function NavbarMobile() {
  const [toggleUserMenu, setToggleUserMenu] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <nav className="lg:hidden flex bg-sidebar-background font-inter border-b border-[#E5EAEF]/50 w-full relative">
      <div className="flex items-center justify-between w-[95%] mx-auto py-3">
        <Button onClick={() => setSidebarOpen(prev => !prev)} variant={"ghost"} className="flex items-center justify-start gap-x-1 w-fit h-fit p-0 hover:bg-none">
          <HambergerMenu size="18" />
          <img src={Logo} alt="logo" className="w-9 h-9 object-contain"/>
        </Button>

        <div className="flex items-center gap-x-3">
          <SearchNormal1 size="24" color="#78828A" variant="Outline" />
          <Button variant={"outline"} className="rounded-full p-[4px] bg-transparent h-fit w-fit">
        <Notification size="20" className="text-foreground"/>
          </Button>

          <button onClick={() => setToggleUserMenu(prev => !prev)} className="bg-transparent p-1 rounded-[28px] flex items-center gap-x-2 border border-[#DADDDD]">
          <img src={user} alt="user" className="w-5 h-5 object-contain" />
          
          <ArrowDown2 size="18" className="text-foreground"/>
        </button>
        </div>
        
      </div>
      {toggleUserMenu && <UserMenu />}
      {sidebarOpen && <SidebarMobile  closeSidebar={() => setSidebarOpen(false)}/>}
      
    </nav>
  )
}
