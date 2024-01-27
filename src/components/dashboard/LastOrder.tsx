import { orders } from "../../lib/data/navdata"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import { DocumentDownload } from "iconsax-react"


export default function LastOrder() {
  return (
    <div className="bg-background p-5 rounded-[14px] border font-pjs space-y-4">
      <div className="flex items-center justify-between px-2 text-lg font-semibold">
        <h3>Last Order</h3>
        <button className="text-[#34CAA5] font-medium">See All</button>
      </div>

     <Table className="font-medium leading-6 whitespace-nowrap">
  <TableHeader className="text-[#9CA4AB] ">
    <TableRow>
      <TableHead className="">Name</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="">Invoice</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
          {orders.map((item) => (
      <TableRow key={item.id} className="">
          <TableCell className="flex items-center gap-x-[10px] text-foreground/80 md:pr-0 pr-10"><img src={item.img} alt="order" />
          <span>{item.name}</span></TableCell>
        <TableCell className="text-[#737373]">{item.date}</TableCell>
        <TableCell>${item.amount}</TableCell>
        <TableCell className={`${item.status === "Refund" ? "text-[#ED544E]" : "text-[#34CAA5]"} font-normal `}>{item.status}</TableCell>
        <TableCell className="flex items-center gap-x-[6px] font-normal"><DocumentDownload size="16"/> <span>View</span></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

    </div>
  )
}
