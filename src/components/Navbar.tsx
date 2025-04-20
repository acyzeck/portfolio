'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from '@/components/ui/dock';
import { useTheme } from '@/lib/ThemeContext'; // Importing the context hook
import { DATA } from '@/data/resume';
export function Navbar() {
    const { isDark, toggleTheme } = useTheme();
    return (
        <div className="flex flex-col items-center justify-center">
            <TooltipProvider>
                <Dock direction="middle">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label}>
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
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.contact.social)
                        .filter(([, social]) => social.navbar === true)
                        .map(([name, social]) => (
                            <DockIcon key={name}>
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
                                    <TooltipContent>
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
        </div>
    );
}
