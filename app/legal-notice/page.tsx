"use client";

import Link from "next/link";
import {handleContactClick} from "@/utils/contact";

const legalNoticeItems = [
    {label: "Dénomination sociale", value: "FINSET SAS"},
    {label: "Forme juridique", value: "Société par Actions Simplifiée (SAS)"},
    {label: "Capital social", value: "2 000,00 €"},
    {label: "Siège social", value: "24 RUE PERRONET, 92200 Neuilly-Sur-Seine France"},
    {label: "RCS", value: "102 968 997 R.C.S. Nanterre"},
    {label: "Numéro de TVA", value: "FR27102968997"},
    {
        label: "Directeur de la publication",
        value: "M. Alexis Burgi, en sa qualité de représentant permanent de la société MAT HOLD, Présidente de la SAS FINSET."
    },
    {
        label: "Hébergement",
        value: "Le site vitrine finset.fr est hébergé par la société Vercel Inc.\n L’application web Finset est hébergée par la société Amazon Web Services (AWS).\nLes données des utilisateur sont stockées sur des serveurs situés dans le pays de résidence du club."
    }
];

export default function LegalNoticePage() {

    return (
        <main className="min-h-screen pt-20 bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-3xl">

                    <Link href="/">
                        <button
                            className="text-gray-500 rounded-lg hover:text-gray-900 transition-colors font-medium mb-5">
                            Retour à l&#39;accueil
                        </button>
                    </Link>

                    <header className="mb-12 border-b border-gray-200 pb-8">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Mentions légales
                        </h1>
                        <p className="mt-4 text-sm text-gray-500">
                            Dernière mise à jour : 8 mai 2026
                        </p>
                    </header>

                    <section aria-label="Informations légales" className="space-y-5">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-4">
                            {legalNoticeItems.map((item) => (
                                <div key={item.label}>
                                    <dt className="font-semibold tracking-wide text-gray-900">
                                        {item.label} :
                                    </dt>
                                    <dd className="mt-1 whitespace-pre-line text-base font-medium text-gray-500">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                            <button
                                onClick={handleContactClick}
                                className="font-semibold tracking-wide text-gray-900 hover:text-gray-500 transition-colors"
                                aria-label="Contact"
                            >
                                Contactez-nous
                            </button>
                        </div>
                    </section>

                    <footer className="mt-12 rounded-lg bg-gray-50 p-6 text-sm text-gray-600">
                        Ces informations sont communiquées à titre légal et peuvent être mises à jour
                        si les mentions officielles de la société évoluent.
                    </footer>
                </div>
            </div>
        </main>
    );
}
