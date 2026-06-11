"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { handleContactClick } from "@/utils/contact";

type LegalSection = {
    title: string;
    items: string[];
    link?: { label: string; href: string };
    contact?: boolean;
};

export default function TermsPage() {
    const { t } = useTranslation();
    const sections = t("legal.sections", { returnObjects: true }) as LegalSection[];

    return (
        <main className="min-h-screen pt-20 bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-3xl">

                    <Link href="/">
                        <button
                            className="text-gray-500 rounded-lg hover:text-gray-900 transition-colors font-medium mb-5">
                            {t("legal.backToHome")}
                        </button>
                    </Link>

                    <header className="mb-12 border-b border-gray-200 pb-8">
                        <h1 className="text-4xl font-bold text-gray-900">
                            {t("legal.title")}
                        </h1>
                        <p className="mt-4 text-sm text-gray-500">
                            {t("legal.lastUpdated")}
                        </p>
                        <p className="mt-6 text-base text-gray-600">
                            {t("legal.intro")}
                        </p>
                    </header>

                    <div className="space-y-10">
                        {sections.map((section) => (
                            <section key={section.title} aria-label={section.title}>
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    {section.title}
                                </h2>
                                <ul className="list-disc space-y-2 pl-5">
                                    {section.items.map((item) => (
                                        <li key={item} className="text-base text-gray-600">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {section.link && (
                                    <a
                                        href={section.link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-block font-medium text-primary hover:underline"
                                    >
                                        {section.link.label}
                                    </a>
                                )}
                                {section.contact && (
                                    <button
                                        onClick={handleContactClick}
                                        className="mt-3 inline-block font-medium text-primary hover:underline"
                                        aria-label={t("legal.contactCta")}
                                    >
                                        {t("legal.contactCta")}
                                    </button>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
