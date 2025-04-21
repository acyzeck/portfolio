import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 pt-4 pb-16">
            {/* Main Content */}
            <div className="min-h-screen">
                <Outlet />
            </div>

            {/* Fixed Navbar at bottom */}
            <div>
                <Navbar />
            </div>
        </div>
    );
}
