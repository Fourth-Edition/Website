export type DealStatus = "won" | "pending" | "lost";

export interface Deal {
  company: string;
  contact: string;
  value: string;
  status: DealStatus;
}

export interface Stat {
  label: string;
  value: string;
  delta: string;
  deltaUp: boolean;
  trend: number[];
}

export interface RevenuePoint {
  month: string;
  value: number;
}

export interface PipelineStage {
  label: string;
  count: number;
}

export const stats: Stat[] = [
  { label: "Total revenue", value: "$482.3k", delta: "+12.4%", deltaUp: true, trend: [40, 55, 48, 62, 58, 74, 80] },
  { label: "Open deals", value: "36", delta: "+4", deltaUp: true, trend: [28, 30, 27, 33, 31, 34, 36] },
  { label: "Win rate", value: "38%", delta: "+2.1%", deltaUp: true, trend: [32, 34, 33, 35, 36, 37, 38] },
  { label: "Avg. response", value: "3.2h", delta: "-0.6h", deltaUp: true, trend: [5.1, 4.8, 4.5, 4.0, 3.8, 3.5, 3.2] },
];

export const revenue: RevenuePoint[] = [
  { month: "Feb", value: 58 },
  { month: "Mar", value: 62 },
  { month: "Apr", value: 71 },
  { month: "May", value: 66 },
  { month: "Jun", value: 79 },
  { month: "Jul", value: 92 },
];

export const pipeline: PipelineStage[] = [
  { label: "New", count: 24 },
  { label: "Qualified", count: 16 },
  { label: "Proposal", count: 9 },
  { label: "Won", count: 7 },
];

export const deals: Deal[] = [
  { company: "Northwind Traders", contact: "A. Reyes", value: "$18,400", status: "won" },
  { company: "Contoso Retail", contact: "J. Kim", value: "$9,200", status: "pending" },
  { company: "Initech", contact: "S. Cole", value: "$4,800", status: "lost" },
];
