"use client";

import { ArrowRight, BadgeCheck, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { handleContactClick } from "@/utils/contact";
import Image from "next/image";


const Hero = () => {
    const { t } = useTranslation();

    return (
        <section
            className="relative overflow-hidden pt-20 pb-32 mt-10"
            style={{ background: "linear-gradient(135deg, #223d65 0%, #223d65 40%, #3e5e8d 100%)" }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">

                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {t('hero.title')}
                            <span className="bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent"> {t('hero.titleHighlight')}</span>
                        </h1>

                        <p className="text-xl text-white/90 mb-8 max-w-2xl">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-primary hover:bg-white/10"
                                onClick={handleContactClick}
                            >
                                {t('hero.viewDemo')}
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl shadow-strong">
                            <Image
                                loading="eager"
                                src="/hero-dashboard.jpg"
                                alt="Tableau de bord financier sportif"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                        </div>

                        <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-medium">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-success/10 rounded-lg">
                                    <BadgeCheck className="w-5 h-5 text-success" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{t('hero.cards.compliance')}</div>
                                    <div className="text-sm text-muted-foreground">{t('hero.cards.complianceDesc')}</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-medium">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{t('hero.cards.security')}</div>
                                    <div className="text-sm text-muted-foreground">{t('hero.cards.securityDesc')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;