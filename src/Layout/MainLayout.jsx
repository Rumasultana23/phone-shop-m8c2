import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";


const MainLayout = () => {

    const loc = useLocation();

    useEffect(() => {
        if(loc.pathname === "/"){
            document.title = `Phone-home`;
        }
        else{
            document.title = `Phone ${loc.pathname.replace("/", '-')}`;
        }

        if(loc.state){
            document.title = `${loc.state}`;
        }

    }, [loc.pathname, loc.state]);
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <div className="py-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;