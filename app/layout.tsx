import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FINSET',
    url: 'https://finset.fr',
};

export const metadata: Metadata = {
    title: "Finset – Logiciel SaaS de gestion financière pour clubs de football",
    description: "Finset est un logiciel SaaS dédié aux clubs professionnels. Notre application centralise et pilote vos flux financiers sportifs, transformant la complexité opérationnelle en décisions claires et maîtrisées.",
    openGraph: {
        title: "Finset – Logiciel SaaS de gestion financière pour clubs de football",
        description: "Le logiciel SaaS de gestion financière pour le sport professionnel. Contrats, transferts, indemnités FIFA, conformité UEFA.",
        url: "https://finset.fr",
        siteName: "Finset",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "https://finset.fr/meta-preview.jpg",
                width: 1200,
                height: 630,
                alt: "Finset – Logiciel SaaS de gestion financière pour clubs de football",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Finset – Logiciel SaaS de gestion financière",
        description: "L'application SaaS pour centraliser vos flux financiers sportifs. Conforme FIFA & UEFA.",
    },
    metadataBase: new URL("https://finset.fr"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body className={geist.className}>
                <I18nProvider>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </I18nProvider>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}
