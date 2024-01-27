import { Category, Profile, Setting2 } from "iconsax-react";


export default function UserMenu() {
  return (
      <div className=" w-fit space-y-3 items-center  absolute lg:top-20 top-16 lg:right-9 right-2 rounded-xl border border-foreground/20 py-2 px-4 z-50 bg-background">
        <button className="flex items-center gap-x-3">
        <Category size={20} />
        <p>My Dashboard</p>
      </button> 
      <button className="flex items-center gap-x-3">
        <Profile size="20" />
        <p>My Profile</p>
      </button> 
      <button className="flex items-center gap-x-3">
        <Setting2 size={20} />
        <p>My Settings</p>
        </button>
    </div>
  )
}
