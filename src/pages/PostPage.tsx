import { useParams } from 'react-router-dom';
import { posts } from '@/data/blog';
import { motion } from 'framer-motion';
import { blurFade } from '@/components/ui/blur-fade';

const PostPage = () => {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-red-600">
                    404 - Post Not Found
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                    The blog post you're looking for doesn't exist.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 sm:px-8 lg:px-12">
            <motion.div
                initial="initial"
                animate="animate"
                variants={blurFade(0)}
            >
                <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                    {post.title}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
                    Posted on {post.date}
                </p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    {post.description}
                </p>
                <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 text-indigo-600 dark:text-indigo-400 underline hover:opacity-80"
                >
                    Read full article ↗
                </a>
            </motion.div>
        </div>
    );
};

export default PostPage;
