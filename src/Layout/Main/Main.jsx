
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto container'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;