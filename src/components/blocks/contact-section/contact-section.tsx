import Link from 'next/link'
import { Phone } from 'lucide-react'
import { ReactNode } from 'react'
import ContactForm from './contact-form'

export default function ContactSection() {

    return (
        <section className="py-32" id="contact-section">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <div className="mb-16 space-y-4 text-center">
                    <h1 className="text-4xl font-bold lg:text-6xl bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                        Get in Touch
                    </h1>
                    <p className="mx-auto max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
                        Have a question or project in mind? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid divide-y border rounded-lg md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0 overflow-hidden">
                    <div className="flex flex-col justify-between space-y-6 p-8 sm:p-10">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Email</h2>
                            <Link
                                href="mailto:contactus@devomatic.in"
                                className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors dark:text-blue-400 dark:hover:text-blue-300">
                                contactus@devomatic.in
                            </Link>
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500">We typically respond within 24 hours</p>
                    </div>
                    <div className="flex flex-col justify-between space-y-6 p-8 sm:p-10">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Phone</h2>
                            <a
                                href="tel:+918146683408"
                                className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors dark:text-blue-400 dark:hover:text-blue-300">
                                +91 81466 83408
                            </a>
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500">Mon-Fri, 9am-6pm IST</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 sm:p-10 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-zinc-900 dark:to-zinc-800">
                        <Phone className="size-6" aria-hidden />
                        <p className="mt-6 text-center text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Ready to connect
                        </p>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <ContactForm />
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
