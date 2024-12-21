"use client"

interface CircularProgressProps {
  value: number
}

export function CircularProgress({ value }: CircularProgressProps) {
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const progress = (value / 100) * circumference
  const remaining = circumference - progress

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-40 h-40 transform -rotate-90">
        <circle
          className="text-muted/20"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="80"
          cy="80"
        />
        <circle
          className="text-primary"
          strokeWidth="8"
          strokeDasharray={`${progress} ${remaining}`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="80"
          cy="80"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl font-bold">{value}</span>
        <span className="text-sm text-muted-foreground">SOLD SEATS</span>
      </div>
    </div>
  )
}

