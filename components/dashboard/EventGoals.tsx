// import { Card } from "@/components/ui/card"
// import { CircularProgress } from "./circular-progress"

import { Card } from "@nextui-org/react";
import { CircularProgress } from "./CircularProgress";

export function EventGoals() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-pink-500" />
          <h2 className="text-sm font-medium">EVENT GOALS</h2>
        </div>
        <button className="text-muted-foreground hover:text-foreground">•••</button>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <CircularProgress value={78} total={290} />
        
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Event Goal</div>
            <div className="text-2xl font-semibold">290</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Sold Seats</div>
            <div className="text-2xl font-semibold">78</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

