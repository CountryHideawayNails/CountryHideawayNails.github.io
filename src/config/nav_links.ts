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
        href: "https://book.squareup.com/appointments/42l7of3kami9z2/location/LQA98RSMCZJZM/services",
        is_external: true
    }, {
        text_key: "facebook_link",
        href: "https://www.facebook.com/groups/759089528933255",
        is_external: true
    }
];

export { type NavLink };
export default nav_links;