import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './layout/layout';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
