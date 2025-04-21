import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { DATA } from '@/data/resume';
import Markdown from 'markdown-to-jsx';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { useEffect } from 'react';
import { blurFade } from '@/components/ui/blur-fade';
import ProjectCard from '@/components/project-card';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { isDark } = useTheme();

    useEffect(() => {
        document.title = DATA.name;
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.setAttribute(
                'content',
                DATA.summary.replace(/<\/?[^>]+(>|$)/g, '')
            );
        }
    }, []);
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
                            variants={blurFade(0)}
                        >
                            hi, i'm {DATA.name.split(' ')[0]}👋
                        </motion.h1>
                        <motion.p
                            className="md:text-xl"
                            variants={blurFade(0.2)}
                        >
                            {DATA.description}
                        </motion.p>
                    </motion.div>
                    {/* Avatar */}
                    <motion.div
                        className="flex-shrink-0 flex justify-center sm:justify-end"
                        initial="initial"
                        animate="animate"
                        variants={blurFade(0.2)}
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
                    variants={blurFade(0.4)}
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

                {/* Experience Section */}
                <motion.section
                    className="text-center sm:text-left flex justify-center"
                    initial="initial"
                    animate="animate"
                    variants={blurFade(0.6)}
                    id="experience"
                >
                    <Experience />
                </motion.section>

                {/* Projects Section */}
                <motion.section
                    className="flex flex-col gap-8 w-full"
                    initial="initial"
                    animate="animate"
                    variants={blurFade(0.8)}
                    id="projects"
                >
                    <div className="flex flex-col items-center gap-4 w-full">
                        <Link
                            to="/projects"
                            className="text-sm font-bold dark:text-zinc-800 text-zinc-200 bg-zinc-800 dark:bg-zinc-200 py-2 px-4 rounded-md w-fit"
                        >
                            My Projects
                        </Link>
                        <h1 className="text-2xl sm:text-3xl md:text-6xl font-poppins font-bold text-center text-zinc-900 dark:text-zinc-100 whitespace-nowrap text-ellipsis px-4">
                            Check out my latest work
                        </h1>
                        <p className="md:text-lg text-zinc-600 dark:text-zinc-300 text-center">
                            I&apos;ve worked on a variety of projects, from
                            simple websites to complex web applications. Here
                            are a few of my favorites.
                        </p>
                    </div>

                    {/* Centered Project Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-25 gap-y-3 w-full mt-8 justify-items-center">
                        {DATA.projects.slice(0, 4).map((project, index) => (
                            <ProjectCard
                                key={`project-${index}`}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                links={project.links}
                                href={project.href}
                                image={project.image}
                                video={project.video}
                            />
                        ))}
                    </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                    className="text-center sm:text-left flex justify-center"
                    initial="initial"
                    animate="animate"
                    variants={blurFade(1)}
                    id="projects"
                >
                    <Contact />
                </motion.section>
            </div>
        </div>
    );
};

export default HomePage;
