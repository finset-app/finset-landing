"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Users,
    Repeat, FileText, CalendarClock, ChartColumn, HandCoins
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
    const { t } = useTranslation();

    const features = [
        {
            id: 'squadManagement',
            icon: Users,
            title: t('features.squadManagement.title'),
            description: t('features.squadManagement.description'),
            gradient: "from-primary to-accent"
        },
        {
            id: 'network',
            icon: ChartColumn,
            title: t('features.network.title'),
            description: t('features.network.description'),
            gradient: "from-success to-brand-secondary"
        },
        {
            id: 'transferManagement',
            icon: Repeat,
            title: t('features.transferManagement.title'),
            description: t('features.transferManagement.description'),
            gradient: "from-brand-accent to-primary"
        },
        {
            id: 'contracts',
            icon: FileText,
            title: t('features.contracts.title'),
            description: t('features.contracts.description'),
            gradient: "from-accent to-primary"
        },
        {
            id: 'forecast',
            icon: CalendarClock,
            title: t('features.forecast.title'),
            description: t('features.forecast.description'),
            gradient: "from-success to-brand-secondary"
        },
        {
            id: 'compensations',
            icon: HandCoins,
            title: t('features.compensations.title'),
            description: t('features.compensations.description'),
            gradient: "from-brand-accent to-primary"
        },
    ];

    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        {t('features.title')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature) => (
                        <Card key={feature.id} className="group hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card">
                            <CardHeader>
                                <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${feature.gradient} w-fit mb-4`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;