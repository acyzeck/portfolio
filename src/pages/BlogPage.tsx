import { motion } from 'framer-motion';
import { blurFade } from '@/components/ui/blur-fade';
import { posts } from '@/data/blog';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-10 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center w-full mb-8">
                <span className="text-sm dark:text-zinc-800 text-zinc-200 bg-zinc-800 dark:bg-zinc-200 py-1 px-4 rounded-lg shadow-md transition-colors">
                    blog
                </span>
            </div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={blurFade(0)}
                className="text-left"
            >
                <div className="flex flex-col space-y-4">
                    {posts.map((post) => (
                        <motion.div
                            key={post.slug}
                            initial="initial"
                            animate="animate"
                            variants={blurFade()}
                        >
                            <Link to={`/blog/${post.slug}`} className="block">
                                <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900">
                                    <div>
                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                            {post.title}
                                        </h2>
                                        <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-sm">
                                            {post.description}
                                        </p>
                                    </div>
                                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg transition-transform group-hover:translate-x-1">
                                        &rarr;
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default BlogPage;
