const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen px-4 bg-gradient-to-br from-zinc-100 to-indigo-100 dark:from-zinc-900 dark:to-indigo-950">
            <div className="text-center max-w-md">
                <h1 className="text-7xl font-extrabold text-red-600 mb-2 drop-shadow-lg">
                    404
                </h1>
                <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
                    Whoopsie daisy!
                </p>
                <p className="text-md text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    This page either:
                    <br />
                    🛸 Got abducted by aliens
                    <br />
                    ☕ Went on an unpaid coffee break
                    <br />
                    🫥 Is hiding from CSS bugs
                    <br />
                    🧼 Or maybe... you just typed something weird.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300 italic">
                    Either way, it's not here, and we're mildly concerned.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;
