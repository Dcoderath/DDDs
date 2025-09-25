import { Outlet } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div className="fontStyle">
            <NavBar/>
             <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;