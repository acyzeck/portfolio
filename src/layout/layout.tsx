import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
            {/* Main Content */}
            <div className="min-h-screen">
                <Outlet />
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
}
