"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { handleContactClick } from "@/utils/contact";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-foreground text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Image
                                src="/finset-logo-white.svg"
                                alt="Finset logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-white/70 mb-6 max-w-sm">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            <button
                                onClick={handleContactClick}
                                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div></div>

                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.product')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#features" className="text-white/70 hover:text-white transition-colors">
                                    {t('footer.links.features')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-white/70 hover:text-white transition-colors">
                                    {t('footer.links.about')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={handleContactClick}
                                    className="text-white/70 hover:text-white transition-colors"
                                    aria-label="Contact"
                                >
                                    {t('footer.links.contact')}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/70 text-sm">
                        {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
