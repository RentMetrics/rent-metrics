import { SignedIn, SignedOut } from "@clerk/clerk-react";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
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
// import SignIn from "./pages/SignIn/SignIn";
// import SignUp from "./pages/SignUp/SignUp";
import LeaseTradeOut from "./pages/LeaseTradeOut/LeaseTradeOut";
import Occupancy from "./pages/Occupancy/Occupancy";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ThankYou from "./pages/ThankYou/ThankYou";
import Valuation from "./pages/Valuation/Valuation";
import Welcome from "./pages/Welcome/Welcome";

// **Protected Route Component**
const ProtectedRoute = ({ children }) => {
    return (
        <>
            <SignedIn>{children}</SignedIn>
            <SignedOut>
                <Navigate to="/welcome" replace />
            </SignedOut>
        </>
    );
};

// OAuth Callback Component
const OAuthCallback = () => {
    // This component can be empty - Clerk will handle the redirect
    return (
        <div className="grid place-items-center h-screen">
            Processing authentication...
        </div>
    );
};

const router = createBrowserRouter([
    // Public routes
    {
        path: "/welcome",
        element: (
            <SignedOut>
                <Welcome />
            </SignedOut>
        ),
    },
    {
        path: "/sign-in",
        element: (
            <SignedOut>
                <SignInPage />
            </SignedOut>
        ),
    },
    {
        path: "/sign-up",
        element: (
            <SignedOut>
                {/* <SignUpComponent /> */}
                <SignUpPage />
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
            </ProtectedRoute>
        ),
        children: [
            {
                path: "dashboard/properties/",
                element: (
                    <ProtectedRoute>
                        <NoPropertiesFound />
                    </ProtectedRoute>
                ),
            },
            {
                path: "dashboard/add-new-properties",
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
            { path: "operations/occupancy", element: <Occupancy /> },
            { path: "operations/lease-trade-out", element: <LeaseTradeOut /> },
            // { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },
    // **404 Not Found Route**
    { path: "*", element: <NotFound /> },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
