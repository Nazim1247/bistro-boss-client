import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const MainLayout = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div className="max-w-[1280px] mx-auto">
            {noHeaderFooter || <Navbar></Navbar>}
            <div className="min-h-[300px]">
                <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;