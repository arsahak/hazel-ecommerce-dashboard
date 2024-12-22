// // import { Card } from "@/components/ui/card"
// // import { Avatar } from "@/components/ui/avatar"
// // import { LineChart } from "./line-chart"

// import { Avatar, Card } from "@nextui-org/react"
// import { LineChart } from "../shared/LineChart/LineChart"
// import { HiOutlineDotsVertical } from "react-icons/hi"

// const recentSells = [
//   {
//     name: "Lora Walton",
//     location: "East Camden",
//     avatar: "/placeholder.svg?height=40&width=40",
//     amount: 175,
//     tickets: 2
//   },
//   {
//     name: "Alma Gibbs",
//     location: "South Nathanstown",
//     avatar: "/placeholder.svg?height=40&width=40",
//     amount: 175,
//     tickets: 2,
//     highlighted: true
//   },
//   {
//     name: "Eunice Brown",
//     location: "Donaldmouth",
//     avatar: "/placeholder.svg?height=40&width=40",
//     amount: 100,
//     tickets: 1
//   },
//   {
//     name: "Edna Marsh",
//     location: "Rutherfordview",
//     avatar: "/placeholder.svg?height=40&width=40",
//     amount: 100,
//     tickets: 1
//   }
// ]

// export function RecentSells() {
//   return (
//     <Card className="p-6 col-span-3">
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-2">
//           <div className="h-2 w-2 rounded-full bg-blue-500" />
//           <h2 className="text-sm font-medium">RECENT SELLS</h2>
//         </div>
//         <button className="text-sm text-muted-foreground text-gray-400 hover:text-primary"><HiOutlineDotsVertical /></button>
//       </div>

//       <div className="space-y-6">
//         <div className="space-y-2">
//           <div className="flex items-center gap-2">
//             <span className="text-blue-500 font-semibold">78 tickets</span>
//             <span className="text-sm text-muted-foreground">This week</span>
//           </div>
//           <div className="h-8">
//             <LineChart 
//               data={[75, 85, 75, 85, 75, 85]} 
//               color="#2563eb"
//               minimal
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-muted-foreground">32 tickets</span>
//             <span className="text-sm text-muted-foreground">Previous week</span>
//           </div>
//           <div className="h-8 opacity-30">
//             <LineChart
//               data={[65, 75, 65, 75, 65, 75]} 
//               color="#94a3b8"
//               minimal
//             />
//           </div>
//         </div>

//         <div className="space-y-4">
//           {recentSells.map((sell, index) => (
//             <div
//               key={index}
//               className={`flex items-center justify-between p-2 rounded-lg ${
//                 sell.highlighted ? "bg-blue-500 text-white" : ""
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 <Avatar>
//                   <img src={sell.avatar} alt={sell.name} className="rounded-full" />
//                 </Avatar>
//                 <div>
//                   <div className={`font-medium ${sell.highlighted ? "text-white" : "text-foreground"}`}>
//                     {sell.name}
//                   </div>
//                   <div className={`text-sm ${sell.highlighted ? "text-blue-100" : "text-muted-foreground"}`}>
//                     {sell.location}
//                   </div>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className={`font-medium ${sell.highlighted ? "text-white" : "text-foreground"}`}>
//                   ${sell.amount}
//                 </div>
//                 <div className={`text-sm ${sell.highlighted ? "text-blue-100" : "text-muted-foreground"}`}>
//                   EST x {sell.tickets}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Card>
//   )
// }



"use client"

import { Card } from "@nextui-org/react"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { LineChart } from "../shared/LineChart/LineChart"
import Image from "next/image"

// import { Card } from "@/components/ui/card"
// import { Avatar, AvatarImage } from "@/components/ui/avatar"
// import { LineChart } from "./components/line-chart"
// import { MoreVertical } from 'lucide-react'

const recentSells = [
  {
    name: "Lora Walton",
    location: "East Camden",
    avatar: "/placeholder.svg?height=40&width=40",
    tickets: 2,
    amount: 175,
    img: "/assets/images.png"
  },
  {
    name: "Alma Gibbs",
    location: "South Nathanstown",
    avatar: "/placeholder.svg?height=40&width=40",
    tickets: 2,
    amount: 175,
    highlighted: true,
    img: "/assets/images.png"
  },
  {
    name: "Eunice Brown",
    location: "Donnellymouth",
    avatar: "/placeholder.svg?height=40&width=40",
    tickets: 1,
    amount: 100,
    img: "/assets/images.png"
  },
  {
    name: "Edna Marsh",
    location: "Rutherfordview",
    avatar: "/placeholder.svg?height=40&width=40",
    tickets: 1,
    amount: 100,
    img: "/assets/images.png"
  },
]

export default function RecentSells() {
  return (
    <Card className="px-6 pt-6 pb-2 ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <h2 className="text-sm font-medium">RECENT SELLS</h2>
        </div>
        <button className="text-sm text-muted-foreground text-gray-400 hover:text-primary"><HiOutlineDotsVertical /></button>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-blue-500 font-semibold">78 tickets</span>
              <span className="text-sm text-gray-500">This week</span>
            </div>
            <div className="h-8">
              <LineChart
                data={[75, 85, 75, 85, 75, 85]} 
                color="#2563eb"
                minimal
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 font-semibold">32 tickets</span>
              <span className="text-sm text-gray-400">Previous week</span>
            </div>
            <div className="h-8 opacity-30">
              <LineChart 
                data={[65, 75, 65, 75, 65, 75]} 
                color="#94a3b8"
                minimal
              />
            </div>
          </div>
        </div>

        <div className="space">
          {recentSells.map((sell, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 rounded-lg ${
                sell.highlighted ? "bg-blue-500 text-white" : ""
              }`}
            >
              <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={sell.img}
                    alt={sell.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className={sell.highlighted ? "text-white" : "text-gray-900"}>
                    {sell.name}
                  </div>
                  <div className={`text-xs ${
                    sell.highlighted ? "text-blue-100" : "text-gray-500"
                  }`}>
                    {sell.location}
                  </div>
                </div>
              </div>
              <div className="text-right flex gap-2">
                <div className={sell.highlighted ? "text-white" : "text-gray-900"}>
                  ${sell.amount}
                </div>
                <div className={`text-sm ${
                  sell.highlighted ? "text-blue-100" : "text-gray-500"
                }`}>
                  REG x {sell.tickets}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}


