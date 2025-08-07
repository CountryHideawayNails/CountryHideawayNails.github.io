import type { ImageMetadata } from "astro";

import review_a from "../assets/reviews/review_a.webp";
import review_b from "../assets/reviews/review_b.webp";
import review_c from "../assets/reviews/review_c.webp";
import review_d from "../assets/reviews/review_d.webp";

import profile_a from "../assets/reviews/profile_picture_a.webp";
import profile_b from "../assets/reviews/profile_picture_b.webp";
import profile_c from "../assets/reviews/profile_picture_c.webp";
import profile_d from "../assets/reviews/profile_picture_d.webp";

export interface Review {
    image: ImageMetadata;
    review: {
        person: string;
        profile_image: ImageMetadata;
        rating: 1 | 2 | 3 | 4 | 5;
        description: string;
    };
};

const all_reviews: Review[] = [
    {
        image: review_a,
        review: {
            person: "Angela",
            profile_image: profile_a,
            rating: 5,
            description: "The Country Hideaway is so cute, comfortable, and private. Athena is so professional, kind, and thorough. Whatever I ask for she does her absolute best to give me what I want. Love getting pampered!"
        },
    }, {
        image: review_b,
        review: {
            person: "Sharon",
            profile_image: profile_b,
            rating: 5,
            description: "Great selection of colors and nail designs. Wonderful atmosphere with cozy feel to it. Very affordable and even offers discounts periodically. Can't wait to go again."
        },
    }, {
        image: review_c,
        review: {
            person: "Crystal",
            profile_image: profile_c,
            rating: 5,
            description: "Very nice little salon. Cute and welcoming environment. Quiet, no noise from other areas like most salons. Friendly owner."
        },
    }, {
        image: review_d,
        review: {
            person: "Darla",
            profile_image: profile_d,
            rating: 5,
            description: "Athena is an amazing nail technician. She is a blessing and an amazing nail lady and friend!"
        },
    },
];

export default all_reviews;