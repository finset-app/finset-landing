import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Finset – Gestion financière complète de clubs de football",
    description: "Finset apporte aux clubs professionnels une plateforme unique de centralisation et de pilotage des flux financiers, transformant la complexité opérationnelle en décisions claires et maîtrisées.",
    openGraph: {
        title: "Finset – Gestion financière complète de clubs de football",
        description: "La plateforme de gestion financière pour le sport professionnel. Contrats, transferts, indemnités FIFA, conformité UEFA.",
        url: "https://finset.fr",
        siteName: "Finset",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "https://finset.fr/meta-preview.jpg",
                width: 1200,
                height: 630,
                alt: "Finset – Gestion financière de clubs de football",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Finset – Gestion financière de clubs de football",
        description: "Centralisez vos flux financiers sportifs. Conforme FIFA & UEFA.",
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
            </body>
        </html>
    );
}
