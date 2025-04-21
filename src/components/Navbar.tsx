'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from '@/components/ui/dock';
import { useTheme } from '@/context/ThemeContext'; // Importing the context hook
import { DATA } from '@/data/resume';
import { TooltipProvider } from '@radix-ui/react-tooltip';

export function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    return (
        <TooltipProvider>
            <Dock
                direction="middle"
                className="fixed bottom-6 transform -translate-x-1/2 left-1/2 items-center z-50"
            >
                {DATA.navbar.map((item) => (
                    <DockIcon key={item.label} className="relative">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    to={item.href}
                                    aria-label={item.label}
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                            size: 'icon',
                                        }),
                                        'size-10 rounded-full'
                                    )}
                                >
                                    <item.icon className="size-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                                style={{ zIndex: 999 }} // Ensure it appears on top
                            >
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full" />
                {Object.entries(DATA.contact.social)
                    .filter(([, social]) => social.navbar === true)
                    .map(([name, social]) => (
                        <DockIcon key={name} className="relative">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        aria-label={social.name}
                                        className={cn(
                                            buttonVariants({
                                                variant: 'ghost',
                                                size: 'icon',
                                            }),
                                            'size-12 rounded-full'
                                        )}
                                    >
                                        <social.icon className="size-6" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                                    style={{ zIndex: 999 }} // Ensure it appears on top
                                >
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                <Separator orientation="vertical" className="h-full" />
                <DockIcon>
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            buttonVariants({
                                variant: 'ghost',
                                size: 'icon',
                            }),
                            'size-12 rounded-full cursor-pointer'
                        )}
                    >
                        {isDark ? (
                            <SunIcon className="size-6" />
                        ) : (
                            <MoonIcon className="size-6" />
                        )}
                    </button>
                </DockIcon>
            </Dock>
        </TooltipProvider>
    );
}
