import { Suspense, lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { SvgIcon } from "@/components/icon";
import { CircleLoading } from "@/components/loading";

import type { AppRouteObject } from "#/router";

const HomePage = lazy(() => import("@/pages/dashboard/workbench"));
const Analysis = lazy(() => import("@/pages/dashboard/analysis"));
const InvoiceParser = lazy(() => import("@/pages/ai/InvoiceParser"));

const dashboard: AppRouteObject = {
	order: 1,
	path: "dashboard",
	element: (
		<Suspense fallback={<CircleLoading />}>
			<Outlet />
		</Suspense>
	),
	meta: {
		label: "AI Tools",
		icon: (
			<SvgIcon icon="ic-analysis" className="ant-menu-item-icon" size="24" />
		),
		key: "/dashboard",
	},
	children: [
		{
			index: true,
			element: <Navigate to="workbench" replace />,
		},
		{
			path: "workbench",
			element: <HomePage />,
			meta: {
				label: "sys.menu.workbench",
				key: "/dashboard/workbench",
				hideMenu: true,
			},
		},
		{
			path: "analysis",
			element: <Analysis />,
			meta: {
				label: "sys.menu.analysis",
				key: "/dashboard/analysis",
				hideMenu: true,
			},
		},
		{
			path: "parser",
			element: <InvoiceParser />,
			meta: {
				label: "Invoice Parser",
				key: "/dashboard/parser",
			},
		},
	],
};

export default dashboard;
