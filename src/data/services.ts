export interface Service {
    title: string;
    description?: string;
    cost: string;
};

export interface ServiceGroup {
    title: string;
    services: Service[];
};

const princess_age: number = 11;

const all_service_groups: ServiceGroup[] = [
    {
        title: "Manicures",
        services: [
            {
                title: "Basic Manicure",
                description: "Cuticle care, nail trim, and polish.",
                cost: "$20.00",
            }, {
                title: "Deluxe Manicure",
                description: "Basic Manicure + Nail soak and lotion.",
                cost: "$25.00",
            }, {
                title: "Princess Basic Manicure",
                description: `${princess_age} years of age or under.`,
                cost: "$15.00",
            }, {
                title: "Princess Deluxe Manicure",
                description: `${princess_age} years of age or under.`,
                cost: "$20.00",
            }, {
                title: "Mommy and Me Basic Manicure",
                description: `Guardian and child ${princess_age} years of age or under; $10 per additional child.`,
                cost: "$30.00"
            }, {
                title: "Mommy and Me Deluxe Manicure",
                description: `Guardian and child ${princess_age} years of age or under; $15 per additional child.`,
                cost: "$40.00"
            },
        ],
    }, {
        title: "Acrylics and Dips",
        services: [
            {
                title: "Acrylic or Dip Removal",
                description: undefined,
                cost: "$15.00",
            }, {
                title: "Acrylic Full Set",
                description: undefined,
                cost: "$40.00",
            }, {
                title: "Acrylic Fill-In",
                description: undefined,
                cost: "$30.00",
            }, {
                title: "Dip Full Set",
                description: undefined,
                cost: "$40.00",
            }, {
                title: "Dip Fill-In",
                description: undefined,
                cost: "$30.00",
            }, {
                title: "Solar Full Set",
                description: undefined,
                cost: "$55.00",
            }, {
                title: "Solar Fill-In",
                description: undefined,
                cost: "$45.00",
            }, {
                title: "Princess Acrylic or Dip Full Set",
                description: `${princess_age} years of age or under.`,
                cost: "$20.00",
            }, {
                title: "Princess Acrylic or Dip Fill-In",
                description: `${princess_age} years of age or under.`,
                cost: "$10.00",
            }, {
                title: "Princess Solar Full Set",
                description: `${princess_age} years of age or under.`,
                cost: "$30.00",
            }, {
                title: "Princess Solar Fill-In",
                description: `${princess_age} years of age or under.`,
                cost: "$20.00",
            }, {
                title: "Mommy and Me Acrylic Full Set",
                description: `Guardian and child ${princess_age} years of age or under; $20 per additional child.`,
                cost: "$55.00",
            }, {
                title: "Mommy and Me Dip Full Set",
                description: `Guardian and child ${princess_age} years of age or under; $20 per additional child.`,
                cost: "$55.00",
            }, {
                title: "Mommy and Me Solar Full Set",
                description: `Guardian and child ${princess_age} years of age or under; $35 per additional child.`,
                cost: "$65.00",
            },
        ],
    }, {
        title: "Pedicures",
        services: [
            {
                title: "Dry Pedicure",
                description: "Cuticle care, nail trim, and polish.",
                cost: "$30.00",
            }, {
                title: "Basic Pedicure",
                description: "Dry Pedicure + Salt soak, sugar scrub, callus remover, and lotion.",
                cost: "$45.00",
            }, {
                title: "Deluxe Pedicure",
                description: "Basic Pedicure + Mask and hot-towel wrap.",
                cost: "$60.00",
            }, {
                title: "Princess Dry Pedicure",
                description: `${princess_age} years of age or under.`,
                cost: "$20.00",
            }, {
                title: "Princess Basic Pedicure",
                description: `${princess_age} years of age or under.`,
                cost: "$35.00",
            }, {
                title: "Mommy and Me Dry Pedicure",
                description: `Guardian and child ${princess_age} years of age or under; $20 per additional child.`,
                cost: "$55.00",
            }, {
                title: "Mommy and Me Basic Pedicure",
                description: `Guardian and child ${princess_age} years of age or under; $25 per additional child.`,
                cost: "$75.00",
            },
        ],
    }, {
        title: "Gel",
        services: [
            {
                title: "Hard Gel",
                description: undefined,
                cost: "$30.00",
            }, {
                title: "Builder Gel",
                description: undefined,
                cost: "$30.00",
            },
        ],
    }, {
        title: "Add-Ons",
        services: [
            {
                title: "Paraffin Wax",
                description: undefined,
                cost: "$15.00",
            }, {
                title: "Nail Gems",
                description: "Cost Per-Nail",
                cost: "$5.00",
            }, {
                title: "Nail Design",
                description: "Cost Per-Nail",
                cost: "$3.00",
            }, {
                title: "Nail Designs Full Set",
                description: undefined,
                cost: "$10.00",
            }, {
                title: "Nail Repair",
                description: undefined,
                cost: "$6.00",
            }, {
                title: "Polish Change",
                description: undefined,
                cost: "$15.00",
            },
        ],
    },
];

export default all_service_groups;