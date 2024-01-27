import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

export default function SalesTrend() {
    const [period, setPeriod] = useState("monthly")
    const dailyLabel = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"]
    const dailydata = [38000, 22000, 45000, 8000, 28000, 15000, 3000]

    const monthlyLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const monthlydata = [46000, 50000, 32000, 13000, 27000, 41000, 36000, 9000, 18000, 23000, 49000, 5000]

    const yearlyLabel = ["2019", "2020", "2021", "2022", "2023", "2024"]
    const yearlydata = [34000, 12000, 49000, 28000, 20000, 6000]

    const data = {
    labels: period === "daily" ? dailyLabel : period === "monthly" ? monthlyLabel : yearlyLabel,
    datasets: [
      {
        label: "",
        backgroundColor: "rgba(52, 202, 165, 0.10)",
        borderColor: "rgba(52, 202, 165, 0.10)",
            borderWidth: 1,
            barThickness: window.innerWidth >= 1024 ? 26 : window.innerWidth === 768 ? 20 : 10,
        hoverBackgroundColor: "rgba(52, 202, 165, 0.5)",
        data: period === "daily" ? dailydata : period === "monthly" ? monthlydata : yearlydata
      },
    ]
    };
    
  const options = {
      responsive: true,
    plugins: {
      legend: {
        display: false
            },
          tooltip: {
        displayColors: false
    }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 5
      },
      margin: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        border: { dash: [6, 6], display: false },
        grid: {
          display: true // Display grid lines for the y-axis
        },
        ticks: {
          padding: 7
        }
      },
      x: {
        beginAtZero: true,
        border: { display: true },
        grid: {
          display: false // Display grid lines for the y-axis
        },
        ticks: {
          padding: 7
        }
      }
    },
    elements: {
      bar: {
        borderRadius: 40,
      }
        },
  };
  
  return (
      <div className="bg-background p-5 rounded-[14px] flex flex-col gap-y-5 font-pjs border w-full">
          <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold ">Sales Trend</h1>

              <div className="flex items-center gap-x-3">
                  <p>Sort by:</p>
                  <select
                      className="py-2 px-3 flex items-center bg-transparent border rounded-[20px]"
                      name="period" id="period"
                      defaultValue={"monthly"} onChange={(e) => setPeriod(e.target.value)}>
                  <option className="bg-background" value="daily">Daily</option>
                  <option className="bg-background" value="monthly">Monthly</option>
                  <option className="bg-background" value="Yearly">Yearly</option>
              </select>
              </div>
              
          </div>
        <Bar data={data} options={options} />
    </div>
  )
}
