"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2 overflow-hidden">
                        <div className="w-32 shrink-0">
                            <Image
                                src="/finset-logo-blue.svg"
                                alt="Finset logo"
                                width={128}
                                height={40}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSwitcher />
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-muted"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border/50">
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
