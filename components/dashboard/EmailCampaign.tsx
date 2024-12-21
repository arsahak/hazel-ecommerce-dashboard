// import { Card } from "@/components/ui/card"
// import { ArrowUpIcon } from 'lucide-react'

import { Card } from "@nextui-org/react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export function EmailCampaign() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-medium">EMAIL CAMPAIGN</h2>
        <button className="text-muted-foreground hover:text-foreground">•••</button>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">SEND EMAILS</div>
            <div className="text-sm text-red-500">-24%</div>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-full w-3/4 bg-pink-500 rounded-full" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">CTA CLICKS</div>
            <div className="text-sm text-green-500">+67%</div>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-full w-2/3 bg-blue-500 rounded-full" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">VENUE EXPENSES</div>
            <div className="flex items-center gap-1 text-green-500">
              <IoArrowUpCircleOutline className="w-3 h-3" />
              <span className="text-sm">+24%</span>
            </div>
          </div>
          <div className="text-2xl font-semibold">$7,890</div>
        </div>
      </div>
    </Card>
  )
}

