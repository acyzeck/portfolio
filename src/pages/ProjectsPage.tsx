import { DATA } from '@/data/resume';
import ProjectCard from '@/components/project-card';
import { motion } from 'framer-motion';
import { blurFade } from '@/components/ui/blur-fade';

const ProjectsPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div>
            {/* Header */}
            <motion.div className="flex flex-col items-center w-full justify-center">
                <span className="text-sm dark:text-zinc-800 mt-10 text-zinc-200 bg-zinc-800 dark:bg-zinc-200 py-1 px-3 rounded-md w-fit">
                    projects
                </span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mt-10">
                    i like to build things
                </h1>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                    A collection of work I’m proud of — from full-stack apps to
                    fun little experiments.
                </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 w-[700px] mx-auto space-y-6"
            >
                {DATA.projects.map((project, index) => (
                    <motion.div
                        key={`project-${index}`}
                        initial="initial"
                        animate="animate"
                        variants={blurFade(index * 0.3)}
                        className="transition-transform duration-300"
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            links={project.links}
                            href={project.href}
                            image={project.image}
                            video={project.video}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectsPage;
