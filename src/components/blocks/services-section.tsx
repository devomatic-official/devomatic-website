'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BotMessageSquare, BrainCircuit, ChartBarIncreasingIcon, LaptopMinimal, ScanHeart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/ui/border-beam'

export default function ServicesSection() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: '/services/automation-with-ai.png',
            alt: 'Automation With AI',
        },
        'item-2': {
            image: '/services/website-development-with-ai.png',
            alt: 'Website Developement With AI',
        },
        'item-3': {
            image: '/services/chatbot.png',
            alt: 'ChatBot',
        },
        'item-4': {
            image: '/services/analytics-dashboard.png',
            alt: 'Analytics Dashboard',
        },
        'item-5': {
            image: '/services/hospital-management-tool.png',
            alt: 'HospitaL Management Tool',
        }
    }

    return (
        <section className="py-12 md:py-20 lg:py-32" id="services-section">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">Services We Provide</h2>
                    <p>We empower businesses to automate workflows, build intelligent digital experiences, and harness AI-driven solutions for smarter, faster growth.</p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <BrainCircuit className="size-4" />
                                    Automation With AI
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Let AI handle the boring stuff so your team can focus on what really matters.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <LaptopMinimal className="size-4" />
                                    Website Developement With AI
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Get a smart, good-looking website that adapts to your customers and grows with your business.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <BotMessageSquare className="size-4" />
                                    ChatBot
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Give your customers instant answers anytime with a friendly AI chatbot that never sleeps.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <ChartBarIncreasingIcon className="size-4" />
                                    Analytics Dashboard - Coming Soon
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Turn your data into clear insights with an easy-to-use AI dashboard that helps you make smarter decisions faster.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <ScanHeart className="size-4" />
                                    Hospital Management Tool - Coming Soon
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Simplify hospital operations with an AI-powered system that manages patients, staff, and records—all in one place.</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-center dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
