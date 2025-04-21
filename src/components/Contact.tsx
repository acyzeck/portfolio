import { Link } from 'react-router-dom';
import { DATA } from '@/data/resume';

const Contact = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24 md:py-32">
            <div className="flex flex-col items-center w-full">
                {/* Badge with subtle animation */}
                <div
                    className="text-sm font-bold dark:text-zinc-800 text-zinc-200 bg-zinc-800 dark:bg-zinc-200 py-2 px-4 rounded-md w-fit 
                    hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                >
                    Contact
                </div>

                {/* Headline with gradient text */}
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-center 
                    bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 dark:from-zinc-100 to-zinc-700 dark:to-zinc-300 
                    leading-tight tracking-tight"
                >
                    Get in Touch
                </h1>

                {/* Description with max-width and smooth transitions */}
                <p
                    className="text-zinc-600 dark:text-zinc-300 text-center max-w-2xl 
                    transition-colors duration-300 hover:text-zinc-800 dark:hover:text-zinc-100 text-2xl"
                >
                    <span>Want to chat? Just shoot me a dm with a </span>
                    <Link
                        to={DATA.contact.social.X.url}
                        target="_blank"
                        className="font-bold text-[#B8860B] dark:text-[#FFC408] hover:underline transition-all duration-1000"
                    >
                        direct question on twitter
                    </Link>{' '}
                    and I'll respond whenever I can. I will ignore all
                    soliciting.
                </p>
            </div>
        </section>
    );
};

export default Contact;
