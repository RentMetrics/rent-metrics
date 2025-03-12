/* eslint-disable react/prop-types */
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import AddNewProperty from "./pages/AddNewProperty/AddNewProperty";
import AssetIntelligence from "./pages/AssetIntelligence/AssetIntelligence";
import FinancialOverview from "./pages/FinancialOverview/FinancialOverview";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Marketing from "./pages/Marketing/Marketing";
import NoPropertiesFound from "./pages/NoPropertiesFound/NoPropertiesFound";
import Overview from "./pages/Overview/Overview";
import PropertySummary from "./pages/PropertySummary/PropertySummary";
import RequestDemo from "./pages/RequestDemo/RequestDemo";
// import SignIn from "./pages/SignIn/SignIn";
// import SignUp from "./pages/SignUp/SignUp";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import LoadPropertyLayout from "./layouts/LoadPropertyLayout/LoadPropertyLayout";
import Analytics from "./pages/Analytics/Analytics";
import AverageEffectiveRent from "./pages/AverageEffectiveRent/AverageEffectiveRent";
import BudgetVariance from "./pages/BudgetVariance/BudgetVariance";
import Home from "./pages/Home/Home";
import LeaseTradeOut from "./pages/LeaseTradeOut/LeaseTradeOut";
import Occupancy from "./pages/Occupancy/Occupancy";
import Statement from "./pages/Statement/Statement";
import ThankYou from "./pages/ThankYou/ThankYou";
import UnitRenovation from "./pages/UnitRenovation/UnitRenovation";
import UpdateDue from "./pages/UpdateDue/UpdateDue";
import Valuation from "./pages/Valuation/Valuation";

// **Protected Route Component**
const ProtectedRoute = ({ children }) => {
    return (
        <>
            <SignedIn>{children}</SignedIn>
            <SignedOut>
                <Navigate to="/home" replace />
            </SignedOut>
        </>
    );
};

// OAuth Callback Component
// const OAuthCallback = () => {
//     // This component can be empty - Clerk will handle the redirect
//     return (
//         <div className="grid place-items-center h-screen">
//             Processing authentication...
//         </div>
//     );
// };

const router = createBrowserRouter([
    // Public routes
    {
        path: "/home",
        element: (
            <SignedOut>
                <HomeLayout />
            </SignedOut>
        ),
    },

    {
        path: "/home",
        element: (
            <SignedOut>
                <HomeLayout />
            </SignedOut>
        ),
        children: [
            { path: "", element: <Home /> },
            { path: "home/solution", element: <Overview /> },
        ],
    },

    {
        path: "/sign-in",
        element: (
            <SignedOut>
                <SignInComponent />
            </SignedOut>
        ),
    },
    {
        path: "/sign-up",
        element: (
            <SignedOut>
                <SignUpComponent />
            </SignedOut>
        ),
    },
    {
        path: "/forgot-password",
        element: (
            <SignedOut>
                <ForgotPassword />
            </SignedOut>
        ),
    },
    {
        path: "/request-demo",
        element: (
            <SignedOut>
                <RequestDemo />
            </SignedOut>
        ),
    },
    {
        path: "/thank-you",
        element: (
            <SignedOut>
                <ThankYou />
            </SignedOut>
        ),
    },

    // ADD THIS ROUTE - Critical for OAuth callbacks
    // {
    //     path: "/sso-callback",
    //     element: <OAuthCallback />,
    // },

    {
        path: "/",
        element: (
            <ProtectedRoute>
                <LoadPropertyLayout />
                {/* <NoPropertiesFound /> */}
            </ProtectedRoute>
        ),
        children: [
            {
                path: "",
                element: (
                    <ProtectedRoute>
                        <NoPropertiesFound />
                    </ProtectedRoute>
                ),
            },
            {
                path: "add-new-properties",
                element: (
                    <ProtectedRoute>
                        <AddNewProperty />
                    </ProtectedRoute>
                ),
            },
        ],
    },

    {
        path: "/dashboard/",
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "property-summary", element: <PropertySummary /> },
            { path: "property-summary/overview", element: <Overview /> },
            { path: "marketing", element: <Marketing /> },
            { path: "valuation", element: <Valuation /> },
            { path: "asset-intelligence", element: <AssetIntelligence /> },
            { path: "financial/overview", element: <FinancialOverview /> },
            { path: "financial/statement", element: <Statement /> },
            { path: "financial/budget-variance", element: <BudgetVariance /> },
            { path: "operations/occupancy", element: <Occupancy /> },
            { path: "operations/lease-trade-out", element: <LeaseTradeOut /> },
            {
                path: "operations/average-effective-rent",
                element: <AverageEffectiveRent />,
            },
            { path: "unit-renovation/analytics", element: <Analytics /> },
            {
                path: "unit-renovation/project-date",
                element: <UnitRenovation />,
            },
            { path: "unit-renovation/update-due", element: <UpdateDue /> },
            {
                path: "unit-renovation/reno-opportunities",
                element: <UnitRenovation />,
            },
            // { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },
    // **404 Not Found Route**
    { path: "*", element: <NotFound /> },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
