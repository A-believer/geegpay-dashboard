import { topPlatformData } from "../../lib/data/navdata";
import { Progress } from "../ui/progress";


export default function TopPlatform() {
  return (
    <div className="bg-background p-5 rounded-[14px] border font-pjs space-y-4">
      <div className="flex items-center justify-between text-lg font-semibold">
        <h3>Top Platform</h3>
        <button className="text-[#34CAA5] font-medium">See All</button>
      </div>

      <ul className="flex flex-col gap-y-5">
        {topPlatformData.map((item) => (
          <li key={item.id} className="space-y-5">
            <p className="text-lg font-semibold">{item.name}</p>
            <Progress
              value={item.progress}
              className="rounded-full"
              color={item.color} />
            <p className="text-lg flex items-center justify-between font-normal text-foreground/80">
              <span>${item.amount}</span>
              <span>+{item.percent}%</span>
            </p>

          </li>
        ))}
      </ul>
    </div>
  )
}
