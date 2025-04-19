import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export const MainLayout = () => {
    return (
        <div className="flex">
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full">
                <Navbar />
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};
