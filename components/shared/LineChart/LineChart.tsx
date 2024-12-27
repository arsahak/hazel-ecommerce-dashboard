"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface LineChartProps {
  data: number[];
  previousData?: (number | undefined)[];
  labels?: string[];
  minimal?: boolean;
  color: string;
}

export function LineChart({
  data,
  previousData,
  labels,
  minimal = false,
  color,
}: LineChartProps) {
  const defaultLabels = labels || data.map((_, i) => i.toString());

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: !minimal,
      },
      legend: {
        display: false,
      },
    },
    scales: minimal
      ? {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        }
      : {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              color: color,
            },
          },
        },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: minimal ? 0 : 4,
        hoverRadius: minimal ? 0 : 6,
      },
    },
  };

  const chartData = {
    labels: defaultLabels,
    datasets: [
      {
        data: data,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.1)",
        fill: true,
        borderWidth: 2,
      },
      ...(previousData
        ? [
            {
              data: previousData,
              borderColor: "rgba(148, 163, 184, 0.2)",
              borderDash: [5, 5],
              fill: false,
              borderWidth: 2,
            },
          ]
        : []),
    ],
  };

  return <Line options={options} data={chartData} />;
}
