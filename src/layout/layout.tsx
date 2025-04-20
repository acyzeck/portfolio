import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export default function RootLayout() {
    return (
        <div className="flex">
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full">
                <Navbar />
            </div>
            <div className="flex-1 min-h-screen bg-zinc-100 dark:bg-zinc-900">
                <Outlet />
            </div>
        </div>
    );
}
