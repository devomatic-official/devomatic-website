import Link from 'next/link'
import { Phone } from 'lucide-react'
import { ReactNode } from 'react'
import ContactForm from './contact-form'

export default function ContactSection() {

    return (
        <section className="py-32" id="contact-section">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Feel free to reach us</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">Contact Info</h2>
                            <Link
                                href="mailto:hello@tailus.io"
                                className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                contactus@devomatic.in
                            </Link>
                            <p className="mt-3 text-sm">+91 81466 83408</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 sm:p-12">
                        <CardDecorator>
                            <Phone className="size-6" aria-hidden />
                        </CardDecorator>
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
