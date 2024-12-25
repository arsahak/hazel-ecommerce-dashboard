// import { Card } from "@/components/ui/card"
// import { CircularProgress } from "./circular-progress"

import { Card } from "@nextui-org/react";
import { CircularProgress } from "./CircularProgress";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LineChart } from "../shared/LineChart/LineChart";

export function EventGoals() {
  return (
    // <Card className="p-6 w-full h-full">
    //   <div className="flex items-center justify-between mb-6">
    //     <div className="flex items-center gap-2">
    //       <div className="h-2 w-2 rounded-full bg-pink-500" />
    //       <h2 className="text-sm font-medium">EVENT GOALS</h2>
    //     </div>
    //     <button className="text-sm text-muted-foreground text-gray-400 hover:text-primary"><HiOutlineDotsVertical /></button>
    //   </div>

    //   <div className="flex flex-col items-center space-y-8">
    //     <CircularProgress value={78} total={290} />

    //     <div className="grid grid-cols-2 gap-8 w-full">
    //       <div className="text-center">
    //         <div className="text-sm text-muted-foreground mb-1">Event Goal</div>
    //         <div className="text-2xl font-semibold">290</div>
    //       </div>
    //       <div className="text-center">
    //         <div className="text-sm text-muted-foreground mb-1">Sold Seats</div>
    //         <div className="text-2xl font-semibold">78</div>
    //       </div>
    //     </div>
    //   </div>
    // </Card>

    <div className="grid gap-4 md:grid-cols-2">
      {/* Event Goals Card */}
      <Card className="p-6 shadow-none rounded">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            <h2 className="text-sm font-medium">EVENT GOALS</h2>
          </div>
          <button className="text-sm text-muted-foreground text-gray-400 hover:text-primary"><HiOutlineDotsVertical /></button>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            {/* <svg className="w-52 h-52">
              <circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="8"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke="#ec4899"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 120}
                strokeDashoffset={(2 * Math.PI * 120) * (1 - 78 / 290)}
                transform="rotate(-90 128 128)"
              />
            </svg> */}
            <CircularProgress value={78} />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-semibold">290</span>
              <span className="text-sm text-gray-500">TOTAL SEATS</span>
            </div> */}
          </div>

          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="text-center">
              <div className="text-sm text-pink-500 mb-1">Event Goal</div>
              <div className="text-2xl font-semibold">290</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-pink-500 mb-1">Sold Seats</div>
              <div className="text-2xl font-semibold">78</div>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex flex-col gap-4 w-full">
        {/* Email Campaign Card */}
        <Card className="p-6 shadow-none rounded">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-medium">EMAIL CAMPAIGN</h2>
            <button className="text-sm text-muted-foreground text-gray-400 hover:text-primary"><HiOutlineDotsVertical /></button>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">SEND EMAILS</span>
                <span className="text-sm text-red-500">-24%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-pink-500 rounded-full" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">CTA CLICKS</span>
                <span className="text-sm text-emerald-500">+67%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-6 shadow-none rounded">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">VENUE EXPENSES</span>
              <span className="text-sm text-emerald-500">+24%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">$7,890</span>
              <span className="text-sm text-gray-500">Rough cost</span>
            </div>
            <div className="h-10">
              <LineChart
                data={[7000, 7200, 7100, 7300, 7200, 7400, 7300]}
                color="#e2e8f0"
                minimal
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

