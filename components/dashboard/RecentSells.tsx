// import { Card } from "@/components/ui/card"
// import { Avatar } from "@/components/ui/avatar"
// import { LineChart } from "./line-chart"

import { Avatar, Card } from "@nextui-org/react"
import { LineChart } from "../shared/LineChart/LineChart"

const recentSells = [
  {
    name: "Lora Walton",
    location: "East Camden",
    avatar: "/placeholder.svg?height=40&width=40",
    amount: 175,
    tickets: 2
  },
  {
    name: "Alma Gibbs",
    location: "South Nathanstown",
    avatar: "/placeholder.svg?height=40&width=40",
    amount: 175,
    tickets: 2,
    highlighted: true
  },
  {
    name: "Eunice Brown",
    location: "Donaldmouth",
    avatar: "/placeholder.svg?height=40&width=40",
    amount: 100,
    tickets: 1
  },
  {
    name: "Edna Marsh",
    location: "Rutherfordview",
    avatar: "/placeholder.svg?height=40&width=40",
    amount: 100,
    tickets: 1
  }
]

export function RecentSells() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <h2 className="text-sm font-medium">RECENT SELLS</h2>
        </div>
        <button className="text-muted-foreground hover:text-foreground">•••</button>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 font-semibold">78 tickets</span>
            <span className="text-sm text-muted-foreground">This week</span>
          </div>
          <div className="h-8">
            <LineChart 
              data={[75, 85, 75, 85, 75, 85]} 
              color="#2563eb"
              minimal
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">32 tickets</span>
            <span className="text-sm text-muted-foreground">Previous week</span>
          </div>
          <div className="h-8 opacity-30">
            <LineChart
              data={[65, 75, 65, 75, 65, 75]} 
              color="#94a3b8"
              minimal
            />
          </div>
        </div>

        <div className="space-y-4">
          {recentSells.map((sell, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 rounded-lg ${
                sell.highlighted ? "bg-blue-500 text-white" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <img src={sell.avatar} alt={sell.name} className="rounded-full" />
                </Avatar>
                <div>
                  <div className={`font-medium ${sell.highlighted ? "text-white" : "text-foreground"}`}>
                    {sell.name}
                  </div>
                  <div className={`text-sm ${sell.highlighted ? "text-blue-100" : "text-muted-foreground"}`}>
                    {sell.location}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${sell.highlighted ? "text-white" : "text-foreground"}`}>
                  ${sell.amount}
                </div>
                <div className={`text-sm ${sell.highlighted ? "text-blue-100" : "text-muted-foreground"}`}>
                  EST x {sell.tickets}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

