"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('fr') ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
        >
            <Languages className="w-4 h-4" />
            <span className="font-medium">
                {i18n.language.substring(0, 2).toUpperCase()}
            </span>
        </Button>
    );
};

export default LanguageSwitcher;
