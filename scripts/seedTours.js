require("dotenv").config();
const connectDB = require("../config/db");
const Tour = require("../models/Tour");

const tours = [
    {
        images: [
            "/assets/images/mock/travel/travel-1.webp",
            "/assets/images/mock/travel/travel-2.webp",
            "/assets/images/mock/travel/travel-3.webp",
            "/assets/images/mock/travel/travel-4.webp",
            "/assets/images/mock/travel/travel-5.webp",
        ],
        publish: true,
        services: [
            "Gratuities",
            "Pick-up and drop off",
            "Professional guide",
            "Transport by air-conditioned",
        ],
        available: {
            startDate: "2025-04-05T10:55:03+05:00",
            endDate: "2025-04-06T11:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
                name: "Jayvion Simon",
                avatarUrl: "/assets/images/mock/avatar/avatar-1.webp",
                phoneNumber: "+1 202-555-0143",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Majestic Mountain Adventures",
        durations: "4 days 3 nights",
        price: 830,
        destination: "United States",
        priceSale: 810,
        ratingNumber: 4.2,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-2.webp",
            "/assets/images/mock/travel/travel-3.webp",
            "/assets/images/mock/travel/travel-4.webp",
            "/assets/images/mock/travel/travel-5.webp",
            "/assets/images/mock/travel/travel-6.webp",
        ],
        publish: true,
        services: ["Audio guide", "Food and drinks"],
        available: {
            startDate: "2025-04-04T09:55:03+05:00",
            endDate: "2025-04-05T10:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
                name: "Lucian Obrien",
                avatarUrl: "/assets/images/mock/avatar/avatar-2.webp",
                phoneNumber: "+1 416-555-0198",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                name: "Deja Brady",
                avatarUrl: "/assets/images/mock/avatar/avatar-3.webp",
                phoneNumber: "+44 20 7946 0958",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Island Hopping Extravaganza",
        durations: "4 days 3 nights",
        price: 970,
        destination: "Canada",
        priceSale: null,
        ratingNumber: 3.7,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-3.webp",
            "/assets/images/mock/travel/travel-4.webp",
            "/assets/images/mock/travel/travel-5.webp",
            "/assets/images/mock/travel/travel-6.webp",
            "/assets/images/mock/travel/travel-7.webp",
        ],
        publish: true,
        services: ["Lunch", "Private tour"],
        available: {
            startDate: "2025-04-03T08:55:03+05:00",
            endDate: "2025-04-04T09:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
                name: "Deja Brady",
                avatarUrl: "/assets/images/mock/avatar/avatar-3.webp",
                phoneNumber: "+44 20 7946 0958",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
                name: "Harrison Stein",
                avatarUrl: "/assets/images/mock/avatar/avatar-4.webp",
                phoneNumber: "+61 2 9876 5432",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                name: "Reece Chung",
                avatarUrl: "/assets/images/mock/avatar/avatar-5.webp",
                phoneNumber: "+91 22 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Cultural Wonders of Europe",
        durations: "4 days 3 nights",
        price: 700,
        destination: "United Kingdom",
        priceSale: 680,
        ratingNumber: 4.5,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-4.webp",
            "/assets/images/mock/travel/travel-5.webp",
            "/assets/images/mock/travel/travel-6.webp",
            "/assets/images/mock/travel/travel-7.webp",
            "/assets/images/mock/travel/travel-8.webp",
        ],
        publish: false,
        services: ["Audio guide", "Food and drinks"],
        available: {
            startDate: "2025-04-02T07:55:03+05:00",
            endDate: "2025-04-03T08:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
                name: "Reece Chung",
                avatarUrl: "/assets/images/mock/avatar/avatar-5.webp",
                phoneNumber: "+91 22 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
                name: "Lainey Davidson",
                avatarUrl: "/assets/images/mock/avatar/avatar-6.webp",
                phoneNumber: "+49 30 123456",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Safari Expedition in Africa",
        durations: "4 days 3 nights",
        price: 850,
        destination: "Australia",
        priceSale: null,
        ratingNumber: 3.5,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-5.webp",
            "/assets/images/mock/travel/travel-6.webp",
            "/assets/images/mock/travel/travel-7.webp",
            "/assets/images/mock/travel/travel-8.webp",
            "/assets/images/mock/travel/travel-9.webp",
        ],
        publish: true,
        services: ["Lunch", "Private tour"],
        available: {
            startDate: "2025-04-01T06:55:03+05:00",
            endDate: "2025-04-02T07:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                name: "Cristopher Cardenas",
                avatarUrl: "/assets/images/mock/avatar/avatar-7.webp",
                phoneNumber: "+33 1 23456789",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                name: "Melanie Noble",
                avatarUrl: "/assets/images/mock/avatar/avatar-8.webp",
                phoneNumber: "+81 3 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
                name: "Chase Day",
                avatarUrl: "/assets/images/mock/avatar/avatar-9.webp",
                phoneNumber: "+86 10 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Grand Canyon Explorer",
        durations: "4 days 3 nights",
        price: 520,
        destination: "India",
        priceSale: 500,
        ratingNumber: 0.5,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-6.webp",
            "/assets/images/mock/travel/travel-7.webp",
            "/assets/images/mock/travel/travel-8.webp",
            "/assets/images/mock/travel/travel-9.webp",
            "/assets/images/mock/travel/travel-10.webp",
        ],
        publish: true,
        services: ["Audio guide", "Food and drinks"],
        available: {
            startDate: "2025-03-31T05:55:03+05:00",
            endDate: "2025-04-01T06:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                name: "Cristopher Cardenas",
                avatarUrl: "/assets/images/mock/avatar/avatar-7.webp",
                phoneNumber: "+33 1 23456789",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                name: "Melanie Noble",
                avatarUrl: "/assets/images/mock/avatar/avatar-8.webp",
                phoneNumber: "+81 3 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
                name: "Chase Day",
                avatarUrl: "/assets/images/mock/avatar/avatar-9.webp",
                phoneNumber: "+86 10 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Historic Cities of Asia",
        durations: "4 days 3 nights",
        price: 250,
        destination: "Germany",
        priceSale: null,
        ratingNumber: 3,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-7.webp",
            "/assets/images/mock/travel/travel-8.webp",
            "/assets/images/mock/travel/travel-9.webp",
            "/assets/images/mock/travel/travel-10.webp",
            "/assets/images/mock/travel/travel-11.webp",
        ],
        publish: false,
        services: ["Special activities", "Entrance fees"],
        available: {
            startDate: "2025-03-30T04:55:03+05:00",
            endDate: "2025-03-31T05:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                name: "Cristopher Cardenas",
                avatarUrl: "/assets/images/mock/avatar/avatar-7.webp",
                phoneNumber: "+33 1 23456789",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                name: "Melanie Noble",
                avatarUrl: "/assets/images/mock/avatar/avatar-8.webp",
                phoneNumber: "+81 3 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
                name: "Chase Day",
                avatarUrl: "/assets/images/mock/avatar/avatar-9.webp",
                phoneNumber: "+86 10 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Tropical Paradise Getaway",
        durations: "4 days 3 nights",
        price: 750,
        destination: "France",
        priceSale: 620,
        ratingNumber: 2.5,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-8.webp",
            "/assets/images/mock/travel/travel-9.webp",
            "/assets/images/mock/travel/travel-10.webp",
            "/assets/images/mock/travel/travel-11.webp",
            "/assets/images/mock/travel/travel-12.webp",
        ],
        publish: true,
        services: ["Audio guide", "Food and drinks"],
        available: {
            startDate: "2025-03-29T03:55:03+05:00",
            endDate: "2025-03-30T04:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                name: "Cristopher Cardenas",
                avatarUrl: "/assets/images/mock/avatar/avatar-7.webp",
                phoneNumber: "+33 1 23456789",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                name: "Melanie Noble",
                avatarUrl: "/assets/images/mock/avatar/avatar-8.webp",
                phoneNumber: "+81 3 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
                name: "Chase Day",
                avatarUrl: "/assets/images/mock/avatar/avatar-9.webp",
                phoneNumber: "+86 10 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Alaskan Wilderness Tour",
        durations: "4 days 3 nights",
        price: 600,
        destination: "Japan",
        priceSale: null,
        ratingNumber: 2.8,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-9.webp",
            "/assets/images/mock/travel/travel-10.webp",
            "/assets/images/mock/travel/travel-11.webp",
            "/assets/images/mock/travel/travel-12.webp",
            "/assets/images/mock/travel/travel-13.webp",
        ],
        publish: true,
        services: ["Lunch", "Private tour"],
        available: {
            startDate: "2025-03-28T02:55:03+05:00",
            endDate: "2025-03-29T03:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                name: "Cristopher Cardenas",
                avatarUrl: "/assets/images/mock/avatar/avatar-7.webp",
                phoneNumber: "+33 1 23456789",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                name: "Melanie Noble",
                avatarUrl: "/assets/images/mock/avatar/avatar-8.webp",
                phoneNumber: "+81 3 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
                name: "Chase Day",
                avatarUrl: "/assets/images/mock/avatar/avatar-9.webp",
                phoneNumber: "+86 10 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Mediterranean Cruise Voyage",
        durations: "4 days 3 nights",
        price: 980,
        destination: "China",
        priceSale: 950,
        ratingNumber: 4.9,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-10.webp",
            "/assets/images/mock/travel/travel-11.webp",
            "/assets/images/mock/travel/travel-12.webp",
            "/assets/images/mock/travel/travel-13.webp",
            "/assets/images/mock/travel/travel-14.webp",
        ],
        publish: false,
        services: ["Audio guide", "Food and drinks"],
        available: {
            startDate: "2025-03-27T01:55:03+05:00",
            endDate: "2025-03-28T02:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                name: "Cristopher Cardenas",
                avatarUrl: "/assets/images/mock/avatar/avatar-7.webp",
                phoneNumber: "+33 1 23456789",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                name: "Melanie Noble",
                avatarUrl: "/assets/images/mock/avatar/avatar-8.webp",
                phoneNumber: "+81 3 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
                name: "Chase Day",
                avatarUrl: "/assets/images/mock/avatar/avatar-9.webp",
                phoneNumber: "+86 10 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Enchanting Eastern Europe",
        durations: "4 days 3 nights",
        price: 1200,
        destination: "Brazil",
        priceSale: null,
        ratingNumber: 3.6,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-11.webp",
            "/assets/images/mock/travel/travel-12.webp",
            "/assets/images/mock/travel/travel-13.webp",
            "/assets/images/mock/travel/travel-14.webp",
            "/assets/images/mock/travel/travel-15.webp",
        ],
        publish: true,
        services: ["Lunch", "Private tour"],
        available: {
            startDate: "2025-03-26T00:55:03+05:00",
            endDate: "2025-03-27T01:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                name: "Cristopher Cardenas",
                avatarUrl: "/assets/images/mock/avatar/avatar-7.webp",
                phoneNumber: "+33 1 23456789",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                name: "Melanie Noble",
                avatarUrl: "/assets/images/mock/avatar/avatar-8.webp",
                phoneNumber: "+81 3 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
                name: "Chase Day",
                avatarUrl: "/assets/images/mock/avatar/avatar-9.webp",
                phoneNumber: "+86 10 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Scenic Coastal Road Trip",
        durations: "4 days 3 nights",
        price: 820,
        destination: "South Africa",
        priceSale: 720,
        ratingNumber: 2.5,
    },
    {
        images: [
            "/assets/images/mock/travel/travel-12.webp",
            "/assets/images/mock/travel/travel-13.webp",
            "/assets/images/mock/travel/travel-14.webp",
            "/assets/images/mock/travel/travel-15.webp",
            "/assets/images/mock/travel/travel-16.webp",
        ],
        publish: true,
        services: ["Audio guide", "Food and drinks"],
        available: {
            startDate: "2025-03-24T23:55:03+05:00",
            endDate: "2025-03-26T00:55:03+05:00",
        },
        tourGuides: [
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
                name: "Cristopher Cardenas",
                avatarUrl: "/assets/images/mock/avatar/avatar-7.webp",
                phoneNumber: "+33 1 23456789",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
                name: "Melanie Noble",
                avatarUrl: "/assets/images/mock/avatar/avatar-8.webp",
                phoneNumber: "+81 3 1234 5678",
            },
            {
                id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
                name: "Chase Day",
                avatarUrl: "/assets/images/mock/avatar/avatar-9.webp",
                phoneNumber: "+86 10 1234 5678",
            },
        ],
        content:
            "\n<h6>Description</h6>\n\n<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>\n\n<h6>Highlights</h6>\n\n<ul>\n  <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>\n  <li>Vulputate placerat amet pulvinar lorem nisl.</li>\n  <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>\n  <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>\n</ul>\n\n<h6>Program</h6>\n\n<p>\n  <strong>Day 1</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 2</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n\n<p>\n  <strong>Day 3</strong>\n</p>\n\n<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>\n",
        id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b12",
        tags: [
            "Technology",
            "Health and Wellness",
            "Travel",
            "Finance",
            "Education",
        ],
        name: "Ancient Ruins Discovery",
        durations: "4 days 3 nights",
        price: 560,
        destination: "Russia",
        priceSale: null,
        ratingNumber: 1.7,
    },
];

const normalizeTour = (tour) => ({
    name: tour.name,
    content: tour.content,
    images: tour.images.map((img) =>
        img.replace("/assets/images/mock/travel/", "/uploads/")
    ),
    tourGuides: tour.tourGuides,
    available: {
        startDate: new Date(tour.available.startDate),
        endDate: new Date(tour.available.endDate),
    },
    durations: tour.durations,
    destination: tour.destination,
    services: tour.services,
    tags: tour.tags,
    publish: tour.publish === true,
    price: tour.price,
    salePrice: tour.priceSale || null,
    rating: tour.ratingNumber || 0,
});

const seed = async () => {
    await connectDB();

    await Tour.deleteMany();

    const normalizedTours = tours.map(normalizeTour);
    await Tour.insertMany(normalizedTours);

    console.log("✅ Tours seeded successfully");
    process.exit();
};

seed();
