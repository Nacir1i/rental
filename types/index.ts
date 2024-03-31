export type NavLink = {
    label: string;
    // TODO: Maybe add a routes map for further make href safe
    href: string;
    action?: () => void;
}

export type SocialMediaLink = {
    label?: string;
    icon: string;
    href: string;
}