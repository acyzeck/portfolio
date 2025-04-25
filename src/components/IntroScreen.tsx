import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroScreenProps {
    onFinish: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onFinish }) => {
    const [hasInteracted, setHasInteracted] = useState(false);
    const [showBackground, setShowBackground] = useState(true);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const audio = new Audio('/intro.mp3');

        if (hasInteracted) {
            audio.play().catch((e) => console.warn('Audio error:', e));

            // Start text fade out at 3s
            const textTimer = setTimeout(() => setShowText(false), 3000);

            // Start background fade out at 3.25s
            const bgTimer = setTimeout(() => setShowBackground(false), 3250);

            // Complete exit at 4s
            timer = setTimeout(onFinish, 4000);

            return () => {
                clearTimeout(textTimer);
                clearTimeout(bgTimer);
                clearTimeout(timer);
                audio.pause();
                audio.currentTime = 0;
            };
        }

        return () => clearTimeout(timer);
    }, [hasInteracted, onFinish]);

    if (!hasInteracted) {
        return (
            <div
                className="flex items-center justify-center h-screen bg-black text-white cursor-pointer"
                onClick={() => setHasInteracted(true)}
            >
                <h1 className="text-3xl">Click to Enter</h1>
            </div>
        );
    }

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            {/* Background with exit animation */}
            <AnimatePresence>
                {showBackground && (
                    <motion.div
                        className="absolute inset-0 bg-black"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                    />
                )}
            </AnimatePresence>

            {/* Text with entrance and exit animations */}
            <AnimatePresence>
                {showText && (
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                        className="text-5xl md:text-8xl xl:text-9xl font-bold text-red-600 relative z-10"
                    >
                        Clark Walrath
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>
    );
};

export default IntroScreen;
