import { LuBlocks, LuBriefcaseBusiness, LuTrendingUp, LuChartSpline, LuTrendingDown, LuHousePlus } from "react-icons/lu"

export const sidebarItems = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
    Icon: LuHousePlus
  },
  {
    name: "Statistic",
    link: "/admin/statistic",
    Icon: LuChartSpline,
  },
  {
    name: "Incomes",
    link: "/admin/incomes",
    Icon: LuTrendingUp,
  },
  {
    name: "Expenses",
    link: "/admin/expenses",
    Icon: LuTrendingDown
  },
  {
    name: "Categories",
    link: "/admin/categories",
    Icon: LuBlocks
  },
  {
    name: "Plans",
    link: "/admin/plans",
    Icon: LuBriefcaseBusiness
  }
]