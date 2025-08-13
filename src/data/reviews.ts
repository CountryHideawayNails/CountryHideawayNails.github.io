import type { ImageMetadata } from "astro";

import angela_1 from "../assets/reviews/angela_1.webp";
import crystal_1 from "../assets/reviews/crystal_1.webp";
import darla_1 from "../assets/reviews/darla_1.webp";
import sharon_1 from "../assets/reviews/sharon_1.webp";

export interface Review {
    image: ImageMetadata;
    review: {
        person: string;
        rating: 1 | 2 | 3 | 4 | 5;
        description: string;
    };
};

const all_reviews: Review[] = [{
        image: angela_1,
        review: {
            person: "Angela L.",
            rating: 5,
            description: "The Country Hideaway is so cute, comfortable, and private. Athena is so professional, kind, and thorough. Whatever I ask for she does her absolute best to give me what I want. Love getting pampered!"
        },
    }, {
        image: crystal_1,
        review: {
            person: "Crystal F.",
            rating: 5,
            description: "Very nice little salon. Cute and welcoming environment. Quiet, no noise from other areas like most salons. Friendly owner."
        },
    }, {
        image: darla_1,
        review: {
            person: "Darla T.",
            rating: 5,
            description: "Athena is an amazing nail technician. She is a blessing and an amazing nail lady and friend!"
        },
    }, {
        image: sharon_1,
        review: {
            person: "Sharon R.",
            rating: 5,
            description: "Great selection of colors and nail designs. Wonderful atmosphere with cozy feel to it. Very affordable and even offers discounts periodically. Can't wait to go again."
        },
    },
];

export default all_reviews;