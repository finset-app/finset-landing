"use client";

import { ArrowRight, BadgeCheck, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { handleContactClick } from "@/utils/contact";
import Image from "next/image";


const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-32 mt-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
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

                    {/* Right Column - Hero Image */}
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

                        {/* Floating Stats Cards */}
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