const tourServices = [
    { label: "Audio guide", value: "Audio guide" },
    { label: "Food and drinks", value: "Food and drinks" },
    { label: "Lunch", value: "Lunch" },
    { label: "Private tour", value: "Private tour" },
    { label: "Special activities", value: "Special activities" },
    { label: "Entrance fees", value: "Entrance fees" },
    { label: "Gratuities", value: "Gratuities" },
    { label: "Pick-up and drop off", value: "Pick-up and drop off" },
    { label: "Professional guide", value: "Professional guide" },
    {
        label: "Transport by air-conditioned",
        value: "Transport by air-conditioned",
    },
];

const tags = [
    "Technology",
    "Health and Wellness",
    "Travel",
    "Finance",
    "Education",
    "Food and Beverage",
    "Fashion",
    "Home and Garden",
    "Sports",
    "Entertainment",
    "Business",
    "Science",
    "Automotive",
    "Beauty",
    "Fitness",
    "Lifestyle",
    "Real Estate",
    "Parenting",
    "Pet Care",
    "Environmental",
    "DIY and Crafts",
    "Gaming",
    "Photography",
    "Music",
];

const getTourServices = (req, res) => {
    res.status(200).json(tourServices);
};

const getTags = (req, res) => {
    res.status(200).json(tags);
};

module.exports = {
    getTourServices,
    getTags,
};
