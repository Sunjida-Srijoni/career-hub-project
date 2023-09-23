import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div className='border-2 border-red-600 mx-auto max-w-6xl'>
                <Header></Header>
            
                <Outlet></Outlet>
            </div>
            
            
            <Footer></Footer>

            
            
        </div>
    );
};

export default Root;