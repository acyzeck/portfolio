/* eslint-disable @typescript-eslint/no-explicit-any */
import Markdown from 'markdown-to-jsx';

interface ProjectCardProps {
    title: string;
    href: string;
    description: string;
    image?: string;
    video?: string;
    technologies?: readonly string[];
    links?: readonly {
        href: string;
        type: string;
        icon?: React.ReactNode;
    }[];
}

const ProjectCard = ({
    title,
    description,
    image,
    video,
    technologies,
    links,
    href,
}: ProjectCardProps) => {
    const handleClick = () => {
        window.open(href, '_blank');
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer w-80 bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden"
        >
            {(image || video) && (
                <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    )}
                    {video && (
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            )}

            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                    {title}
                </h3>
                <Markdown
                    className="text-xs text-zinc-700 dark:text-zinc-300"
                    options={{
                        overrides: {
                            a: {
                                component: (props: any) => (
                                    <a
                                        {...props}
                                        className="underline text-[#B8860B] dark:text-[#FFC408]"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                ),
                            },
                        },
                    }}
                >
                    {description}
                </Markdown>

                <div className="flex flex-wrap gap-1 mt-auto">
                    {technologies?.map((tech) => (
                        <span
                            key={tech}
                            className="bg-zinc-100 dark:bg-zinc-800 text-[10px] font-medium text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {links && links.length > 0 && (
                    <div className="flex gap-2 mt-2">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-zinc-800 dark:bg-zinc-100 text-zinc-300 dark:text-zinc-800 text-xs font-medium px-3 py-1 rounded-md hover:opacity-90 transition-opacity"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {link.icon && (
                                    <span className="w-3 h-3 flex-shrink-0">
                                        {link.icon}
                                    </span>
                                )}
                                {link.type}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
