import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';
import { DATA } from '@/data/resume';
import Markdown from 'markdown-to-jsx';

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
        <div className="flex flex-col min-h-screen w-full items-center justify-start px-4 pt-12">
            <div className="w-full max-w-xl flex flex-col gap-6">
                {/* Hero Section */}
                <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-8 sm:gap-10">
                    {/* Text */}
                    <motion.div
                        className="flex-1 flex flex-col space-y-5 text-center sm:text-left"
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h1
                            className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tighter"
                            variants={fadeInUp(0)}
                        >
                            hi, i'm {DATA.name.split(' ')[0]}👋
                        </motion.h1>
                        <motion.p
                            className="md:text-xl"
                            variants={fadeInUp(0.2)}
                        >
                            {DATA.description}
                        </motion.p>
                    </motion.div>
                    {/* Avatar */}
                    <motion.div
                        className="flex-shrink-0 flex justify-center sm:justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            ease: 'easeOut',
                        }}
                    >
                        <span className="relative overflow-hidden rounded-full w-28 h-28 border-2 dark:border-zinc-400 border-zinc-600">
                            <img
                                src={
                                    isDark
                                        ? '/clark-dark.png'
                                        : '/clark-light.png'
                                }
                                alt="Clark"
                                className="object-cover w-full h-full"
                            />
                        </span>
                    </motion.div>
                </div>

                {/* About Section */}
                <motion.section
                    className="text-center sm:text-left"
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp(0.4)}
                    id="about"
                >
                    <h2 className="text-md sm:text-2xl font-bold mb-2">
                        About
                    </h2>
                    <span className="text-zinc-500">
                        <Markdown
                            options={{
                                overrides: {
                                    a: {
                                        props: {
                                            className:
                                                'underline dark:text-zinc-100 dark:hover:text-zinc-200 text-zinc-800 hover:text-zinc-900',
                                        },
                                    },
                                },
                            }}
                        >
                            {DATA.summary}
                        </Markdown>
                    </span>
                </motion.section>
            </div>
        </div>
    );
};

export default HomePage;
