import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RootLayout from './layout/layout';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <Routes key="routes">
            <Route element={<RootLayout />}>
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<PostPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default App;
