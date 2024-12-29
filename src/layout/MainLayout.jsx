import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[300px]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;