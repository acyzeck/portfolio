import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';

const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.6,
            ease: 'easeOut',
        },
    },
});

const HomePage = () => {
    const { isDark } = useTheme();

    return (
        <div className="flex flex-col w-screen items-center justify-center mt-20">
            <div className="mx-auto w-full max-w-2xl space-y-8 px-4">
                {/* Top hero section */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <motion.div
                        className="flex flex-col flex-1 space-y-2"
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h1
                            className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                            variants={fadeInUp(0)}
                        >
                            hi, i'm clark 👋
                        </motion.h1>
                        <motion.p
                            className="max-w-[600px] md:text-xl"
                            variants={fadeInUp(0.2)}
                        >
                            I'm a 13-year-old developer from San Diego, CA. I
                            specialize in web development and have a passion for
                            creating user-friendly and visually appealing
                            websites.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="self-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            ease: 'easeOut',
                        }}
                    >
                        <span className="relative flex shrink-0 overflow-hidden rounded-full w-28 h-28 border">
                            <img
                                src={
                                    isDark
                                        ? '/clark-dark.png'
                                        : '/clark-light.png'
                                }
                                alt="Clark"
                            />
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
