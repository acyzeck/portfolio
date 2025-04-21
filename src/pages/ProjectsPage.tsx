import { DATA } from '@/data/resume';
import ProjectCard from '@/components/project-card';
import { motion } from 'framer-motion';
import Contact from '@/components/Contact';
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
        <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    My Projects
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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

            {/* Contact Section */}
            <motion.section
                className="text-center sm:text-left flex justify-center"
                initial="initial"
                animate="animate"
                variants={blurFade(0.5)}
                id="projects"
            >
                <Contact />
            </motion.section>
        </div>
    );
};

export default ProjectsPage;
