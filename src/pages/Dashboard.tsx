import { Comparison, LastOrder, SalesTrend, TopPlatform } from "../components/dashboard";
import { navItems } from "../lib/data/navdata";
import { useLocation } from "react-router-dom";


export default function Dashboard() {
  const location = useLocation()

  return (
    <div className=" bg-sidebar-background">
      <div className="lg:w-[98%] w-[95%] mx-auto  flex flex-col gap-y-5 py-5">
        <h1 className="font-pjs text-xl font-semibold lg:hidden block">{navItems.map((item) => (
        <span key={item.id}>{ location.pathname === item.to && item.name}</span>
      ))}</h1>

      <div className="w-full flex xl:flex-row flex-col items-center gap-5">
        <div className="xl:w-[60%] w-full h-full"><SalesTrend/></div>
        <div className="xl:w-[45%] w-full h-full"><Comparison/></div>
      </div>

      <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-5  ">
        <div className="xl:w-[60%] w-full h-full"><LastOrder/></div>
        <div className="xl:w-[45%] w-full h-full"><TopPlatform/></div>
      </div>
      </div>
      
    </div>
  )
}
