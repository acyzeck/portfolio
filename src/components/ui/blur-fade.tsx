export const blurFade = (delay = 0) => {
    return {
        initial: {
            opacity: 0,
            y: 20,
            filter: 'blur(8px)',
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                delay,
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };
};
