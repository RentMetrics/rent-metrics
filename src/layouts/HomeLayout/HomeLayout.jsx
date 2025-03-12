import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";

export default function HomeLayout() {
    return (
        <>
            <LandingPageHeader />

            <Outlet />
            <Footer />
        </>
    );
}
