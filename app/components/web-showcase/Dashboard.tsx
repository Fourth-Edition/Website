import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import PipelineBar from "./PipelineBar";
import DealsList from "./DealsList";
import { stats } from "./data";
import { web } from "./theme";

export default function Dashboard() {
  return (
    <div className={`flex w-full ${web.appBg}`}>
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <div className="flex-1 p-2.5 space-y-2.5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <RevenueChart />
            <PipelineBar />
          </div>
          <DealsList />
        </div>
      </div>
    </div>
  );
}
