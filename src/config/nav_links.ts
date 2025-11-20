import external_links from "./external_links.json";
import type { TranslationFileKey } from "../utils/content/translation";

interface NavLink {
    text_key: TranslationFileKey["common"];
    href: string;
    is_external: boolean;
};

const nav_links: NavLink[] = [
    {
        text_key: "home_link",
        href: "/",
        is_external: false
    }, {
        text_key: "services_link",
        href: "/services",
        is_external: false
    }, {
        text_key: "book_link",
        href: external_links.booking,
        is_external: true
    }, {
        text_key: "facebook_link",
        href: external_links.facebook,
        is_external: true
    }
];

export { type NavLink };
export default nav_links;