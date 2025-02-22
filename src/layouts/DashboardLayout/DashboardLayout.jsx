import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function DashboardLayout() {
    // const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="w-full h-full">
                <DashboardHeader />
                <Outlet />
            </div>
        </div>
    );
}
