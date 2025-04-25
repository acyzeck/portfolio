import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // Corrected import

import HomePage from './pages/HomePage';
import RootLayout from './layout/layout';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';
import IntroScreen from './components/IntroScreen';

const App = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [hasSeenIntro, setHasSeenIntro] = useState(false);

    // Update hasSeenIntro after intro screen finishes
    useEffect(() => {
        if (!showIntro) {
            // Set hasSeenIntro to true with local storage
            localStorage.setItem('hasSeenIntro', 'true');
            setHasSeenIntro(true);
        }
    }, [showIntro]);

    useEffect(() => {
        const hasSeenIntro = localStorage.getItem('hasSeenIntro');
        if (hasSeenIntro === 'true') {
            setShowIntro(false);
        }
    });

    return (
        <AnimatePresence mode="wait">
            {!hasSeenIntro && showIntro ? (
                <IntroScreen key="intro" onFinish={() => setShowIntro(false)} />
            ) : (
                <Routes key="routes">
                    <Route element={<RootLayout />}>
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:slug" element={<PostPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            )}
        </AnimatePresence>
    );
};

export default App;
