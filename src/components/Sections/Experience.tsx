import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRightIcon, ExternalLinkIcon } from 'lucide-react';
import { DATA } from '@/data/resume';
import { Link } from 'react-router-dom';

export default function Experience() {
    const [activeTab, setActiveTab] = useState('education');

    const [openItems, setOpenItems] = useState<Set<number>>(new Set());
    const toggleItem = (index: number) => {
        const newSet = new Set(openItems);
        if (newSet.has(index)) {
            newSet.delete(index);
        } else {
            newSet.add(index);
        }
        setOpenItems(newSet);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 py-3 px-4 w-full">
            <Tabs
                defaultValue="education"
                onValueChange={setActiveTab}
                className="w-full max-w-[600px]"
            >
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                        className={`${
                            activeTab === 'education'
                                ? 'cursor-default'
                                : 'cursor-pointer'
                        }`}
                        value="education"
                    >
                        Education
                    </TabsTrigger>
                    <TabsTrigger
                        className={`${
                            activeTab === 'work'
                                ? 'cursor-default'
                                : 'cursor-pointer'
                        }`}
                        value="work"
                    >
                        Work
                    </TabsTrigger>
                </TabsList>

                {/* Education Tab */}
                <TabsContent value="education">
                    <Card>
                        <CardContent className="space-y-4 p-4 sm:p-6">
                            {DATA.education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
                                >
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage
                                            src={edu.logoUrl}
                                            alt={edu.school}
                                        />
                                    </Avatar>
                                    <div className="flex flex-col sm:flex-row w-full items-start sm:items-center">
                                        <div>
                                            <CardTitle className="text-base flex items-center">
                                                <Link
                                                    to={edu.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex group cursor-pointer"
                                                >
                                                    <span className="group-hover:underline duration-200 transition-all underline">
                                                        {edu.school}
                                                    </span>
                                                    <ExternalLinkIcon className="mt-1 ml-1 size-4 group-hover:opacity-100 opacity-100 duration-200 transition-all sm:opacity-0" />
                                                </Link>
                                            </CardTitle>
                                            <CardDescription className="text-sm">
                                                {edu.degree}
                                            </CardDescription>
                                        </div>
                                        <div className="text-sm font-medium sm:ml-auto text-left sm:text-right mt-1 sm:mt-0 text-muted-foreground">
                                            {edu.start} – {edu.end}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Work Tab */}
                <TabsContent value="work">
                    <Card>
                        <CardContent className="space-y-4 p-4 sm:p-6">
                            {DATA.work.map((work, i) => {
                                const isOpen = openItems.has(i);
                                return (
                                    <div key={i}>
                                        {/* Clickable Header */}
                                        <div
                                            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full text-left group cursor-pointer"
                                            onClick={() => toggleItem(i)}
                                        >
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage
                                                    src={work.logoUrl}
                                                    alt={work.company}
                                                />
                                            </Avatar>
                                            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center">
                                                <div>
                                                    <CardTitle className="text-base flex items-center group">
                                                        {work.company}
                                                        <ChevronRightIcon
                                                            className={`size-5 transition-all duration-300 opacity-100 sm:opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1.5 ${
                                                                isOpen
                                                                    ? 'rotate-90'
                                                                    : ''
                                                            }`}
                                                        />
                                                    </CardTitle>

                                                    <CardDescription className="text-sm">
                                                        {work.title}
                                                    </CardDescription>
                                                </div>

                                                <div className="text-sm font-medium sm:ml-auto text-left sm:text-right mt-1 sm:mt-0 text-muted-foreground">
                                                    <span>
                                                        {work.start} –{' '}
                                                        {work.end}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Animated Description */}
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                                isOpen
                                                    ? 'grid-rows-[1fr] opacity-100 translate-y-0 mt-2'
                                                    : 'grid-rows-[0fr] opacity-0 -translate-y-1'
                                            }`}
                                        >
                                            <div className="overflow-hidden pl-4 sm:pl-12 pr-2 text-sm text-foreground">
                                                {work.description}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
