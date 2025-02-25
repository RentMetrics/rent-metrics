import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import LoadPropertyLayout from "./layouts/LoadPropertyLayout/LoadPropertyLayout";
import AddNewProperty from "./pages/AddNewProperty/AddNewProperty";
import AssetIntelligence from "./pages/AssetIntelligence/AssetIntelligence";
import FinancialOverview from "./pages/FinancialOverview/FinancialOverview";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Marketing from "./pages/Marketing/Marketing";
import NoPropertiesFound from "./pages/NoPropertiesFound/NoPropertiesFound";
import Overview from "./pages/Overview/Overview";
import PropertySummary from "./pages/PropertySummary/PropertySummary";
import RequestDemo from "./pages/RequestDemo/RequestDemo";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ThankYou from "./pages/ThankYou/ThankYou";
import Welcome from "./pages/Welcome/Welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />, // Only needed if this page has loaders/actions
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/request-demo",
        element: <RequestDemo />,
    },
    {
        path: "/thank-you",
        element: <ThankYou />,
    },
    {
        path: "/",
        element: <LoadPropertyLayout />,
        children: [
            { path: "/properties", element: <NoPropertiesFound /> },
            { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },
    {
        path: "/dashboard/",
        element: <DashboardLayout />,
        children: [
            { path: "property-summary", element: <PropertySummary /> },
            { path: "property-summary/overview", element: <Overview /> },
            // { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },
    {
        path: "/dashboard/",
        element: <DashboardLayout />,
        children: [
            { path: "marketing", element: <Marketing /> },
            // { path: "property-summary/overview", element: <Overview /> },
            // { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },

    {
        path: "/dashboard/",
        element: <DashboardLayout />,
        children: [
            { path: "valuation", element: <Marketing /> },
            // { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },
    {
        path: "/dashboard/",
        element: <DashboardLayout />,
        children: [
            { path: "asset-intelligence", element: <AssetIntelligence /> },
            // { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },
    {
        path: "/dashboard/",
        element: <DashboardLayout />,
        children: [
            // { path: "financial", element: <FinancialOverview /> },
            { path: "financial/overview", element: <FinancialOverview /> },
            // { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },
    {
        path: "*",
        element: <NotFound />, // 404 handler
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
