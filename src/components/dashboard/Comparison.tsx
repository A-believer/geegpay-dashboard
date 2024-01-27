 import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { trendingDown, trendingUp } from "../../assets";
import { realtimeData } from "../../lib/data/navdata";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Comparison() {
  const options = {
    responsive: true,
    scales: {
    x: { display: false },
    y: { display: false },
  },
  elements: {
    point: { radius: 0 },
  },
  plugins: {
    legend: {
      display: false
    }, 
  },
  };
  

  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-5">
      {realtimeData.map((item) => (
        <div key={item.id} className="bg-background rounded-[14px] p-4 relative space-y-3.5 font-pjs border md:w-[240px] w-full">
          <div className="flex items-center justify-between relative">
            <p className="p-2 border bg-transparent rounded-full">{item.icon}</p>
            <p className="w-[80px]">
               <Line options={options} data={item.data} className="absolute -top-2 right-0"/>
            </p>
           
          </div>
          <p className="text-foreground/50 text-xl leading-[26px] font-semibold">{item.title}</p>
          <p className="text-foreground/80 text-3xl leading-8 font-bold">{item.total}</p>
          
          <div className="flex items-center justify-between gap-x-[10px]">
            <p className={`flex items-center gap-x-1  px-2 py-1 text-xs rounded-full ${(item.id % 2) === 0 ? "text-[#ED544E] bg-[#ED544E]/30" : "text-[#34CAA5] bg-[#34CAA5]/30"}`}>
              <img src={(item.id % 2) !== 0 ? trendingUp : trendingDown} alt="trend" className="w-3 h-3" />23.5%</p>
            <p className="text-sm font-inter">vs. previous month</p>
          </div>
        </div>
      ))}

    </div>
  )
}
