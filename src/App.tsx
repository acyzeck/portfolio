import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { MainLayout } from './layout/MainLayout';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
