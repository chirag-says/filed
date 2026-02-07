import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | FIELD. Guild",
    description: "Get in touch with FIELD. Free Fire guild. Join our Discord, WhatsApp, or reach us via email.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
