// Navigation links used across the site
export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
] as const;

// Social media links
export const socialLinks = [
    { href: "https://discord.gg", label: "Discord", icon: "discord" },
    { href: "https://youtube.com", label: "YouTube", icon: "youtube" },
    { href: "https://instagram.com", label: "Instagram", icon: "instagram" },
] as const;

// Guild statistics
export const guildStats = {
    level: 7,
    levelMax: true,
    weeklyActivity: "150k+",
    members: "50+",
    established: 2024,
} as const;

// Recruitment requirements
export const recruitmentRequirements = {
    minKD: 3.0,
    minRank: "Diamond",
    discordRequired: true,
    micRequired: true,
} as const;

// Free Fire ranks
export const ffRanks = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Heroic",
    "Grandmaster",
] as const;

// Player roles
export const playerRoles = [
    "Rusher",
    "Sniper",
    "Support",
    "IGL",
    "Flexible",
] as const;

// Guild core values
export const coreValues = [
    {
        title: "Respect",
        description: "We treat every member as family. Mutual respect builds trust, and trust builds champions.",
    },
    {
        title: "Activity",
        description: "Active players are winning players. We maintain 150k+ weekly activity because we're always in the game.",
    },
    {
        title: "Skill",
        description: "Raw talent meets dedicated practice. Every member is expected to improve and push their limits.",
    },
] as const;
