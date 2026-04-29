export const handleContactClick = () => {
    const user = "contact";
    const domain = "finset.fr";
    window.open(`mailto:${user}@${domain}`, '_blank', 'noopener,noreferrer');
};