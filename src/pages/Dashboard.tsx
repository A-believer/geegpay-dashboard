import { navItems } from "../lib/data/navdata";
import { useLocation } from "react-router-dom";


export default function Dashboard() {
  const location = useLocation()

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-y-5 py-5">
      <h1 className="font-pjs text-xl font-semibold lg:hidden block">{navItems.map((item) => (
        <span key={item.id}>{ location.pathname === item.to && item.name}</span>
      ))}</h1>

      <div className="w-full flex lg:flex-row flex-col items-center gap-5 ">
        <div className="lg:w-[75%] w-full">Sale Trends</div>
        <div className="lg:w-[25%] w-full">Realtime Data</div>

      </div>

      <div className="w-full flex lg:flex-row flex-col items-center gap-5  ">
        <div className="lg:w-[75%] w-full">Last Orders</div>
        <div className="lg:w-[25%] w-full">Top Platform</div>
      </div>
    </div>
  )
}
