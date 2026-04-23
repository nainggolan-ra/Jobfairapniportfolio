import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Cover } from "./components/slides/Cover";
import { AboutMe } from "./components/slides/AboutMe";
import { Skillset } from "./components/slides/Skillset";
import { SamakakiProblem } from "./components/slides/SamakakiProblem";
import { SamakakiResearch } from "./components/slides/SamakakiResearch";
import { SamakakiProcess } from "./components/slides/SamakakiProcess";
import { SamakakiUI } from "./components/slides/SamakakiUI";
import { SamakakiImpact } from "./components/slides/SamakakiImpact";
import { DashboardOverview } from "./components/slides/DashboardOverview";
import { DashboardDetails } from "./components/slides/DashboardDetails";
import { DashboardFeatures } from "./components/slides/DashboardFeatures";
import { DesignSystem } from "./components/slides/DesignSystem";
import { Closing } from "./components/slides/Closing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Cover },
      { path: "about", Component: AboutMe },
      { path: "skills", Component: Skillset },
      { path: "samakaki/problem", Component: SamakakiProblem },
      { path: "samakaki/research", Component: SamakakiResearch },
      { path: "samakaki/process", Component: SamakakiProcess },
      { path: "samakaki/ui", Component: SamakakiUI },
      { path: "samakaki/impact", Component: SamakakiImpact },
      { path: "dashboard/overview", Component: DashboardOverview },
      { path: "dashboard/details", Component: DashboardDetails },
      { path: "dashboard/features", Component: DashboardFeatures },
      { path: "design-system", Component: DesignSystem },
      { path: "contact", Component: Closing },
    ],
  },
]);

export const slideOrder = [
  "/",
  "/about",
  "/skills",
  "/samakaki/problem",
  "/samakaki/research",
  "/samakaki/process",
  "/samakaki/ui",
  "/samakaki/impact",
  "/dashboard/overview",
  "/dashboard/details",
  "/dashboard/features",
  "/design-system",
  "/contact",
];
