import LocationImage1 from "../assets/img/location1.jpg";
import LocationImage2 from "../assets/img/location2.jpg";
import LocationImage3 from "../assets/img/location3.jpg";
import LocationImage4 from "../assets/img/location4.jpg";
import LocationImage5 from "../assets/img/location5.jpg";
import LocationImage6 from "../assets/img/location6.jpg";
import LocationImage7 from "../assets/img/location7.jpg";
import LocationImage8 from "../assets/img/location8.jpg";
import LocationImage9 from "../assets/img/location9.jpg";

import StoryProfile1 from "../assets/img/storyProfile1.jpg";
import StoryProfile2 from "../assets/img/StoryProfile2.jpg";
import StoryProfile3 from "../assets/img/StoryProfile3.jpg";
import StoryProfile4 from "../assets/img/StoryProfile4.jpg";
import StoryProfile5 from "../assets/img/StoryProfile5.jpg";
import StoryProfile6 from "../assets/img/StoryProfile6.jpg";
import StoryProfile7 from "../assets/img/StoryProfile7.jpg";
import StoryProfile8 from "../assets/img/StoryProfile8.png";
import StoryProfile9 from "../assets/img/StoryProfile9.jpg";

let TripPackages = [
    {
        id: 1,
        location: "Manali, India",
        days: 5,
        people: 15,
        description: "Explore the beautiful mountains of Manali with scenic views and adventure activities.",
        image: LocationImage1,
        storyProfile: StoryProfile1,
        expensePerPerson: 15000,
        weather: "Cool, 15-25°C",
        itinerary: [
            "Day 1: Arrival in Manali, local sightseeing",
            "Day 2: Solang Valley excursion",
            "Day 3: Rohtang Pass trip",
            "Day 4: Manikaran and Kasol visit",
            "Day 5: Shopping and departure"
        ],
        bestTimeToVisit: "October to February",
    },
    {
        id: 2,
        location: "Leh Ladakh, India",
        days: 7,
        people: 10,
        description: "A breathtaking trip across the Leh-Ladakh region, perfect for adventurers.",
        image: LocationImage2,
        storyProfile: StoryProfile2,
        expensePerPerson: 25000,
        weather: "Cold, 5-15°C",
        itinerary: [
            "Day 1: Arrive in Leh, acclimatization",
            "Day 2: Leh local sightseeing",
            "Day 3: Visit Nubra Valley",
            "Day 4: Pangong Lake",
            "Day 5: Leh to Kargil",
            "Day 6: Return to Leh",
            "Day 7: Departure"
        ],
        bestTimeToVisit: "May to September",
    },
    {
        id: 3,
        location: "Kerala, India",
        days: 6,
        people: 20,
        description: "Discover the serene backwaters and lush landscapes of Kerala.",
        image: LocationImage3,
        storyProfile: StoryProfile3,
        expensePerPerson: 20000,
        weather: "Warm, 25-30°C",
        itinerary: [
            "Day 1: Arrival in Kochi",
            "Day 2: Munnar exploration",
            "Day 3: Thekkady wildlife safari",
            "Day 4: Alleppey houseboat experience",
            "Day 5: Kovalam beach",
            "Day 6: Departure"
        ],
        bestTimeToVisit: "October to February",
    },
    {
        id: 4,
        location: "Goa, India",
        days: 3,
        people: 30,
        description: "Enjoy the vibrant beaches, nightlife, and cultural richness of Goa.",
        image: LocationImage4,
        storyProfile: StoryProfile4,
        expensePerPerson: 10000,
        weather: "Warm, 25-32°C",
        itinerary: [
            "Day 1: Beach day at Baga and Calangute",
            "Day 2: Visit Old Goa and night party",
            "Day 3: Shopping and departure"
        ],
        bestTimeToVisit: "November to February",
    },
    {
        id: 5,
        location: "Shimla, India",
        days: 4,
        people: 25,
        description: "Relax in the cool weather and scenic hills of Shimla.",
        image: LocationImage5,
        storyProfile: StoryProfile5,
        expensePerPerson: 12000,
        weather: "Cool, 10-20°C",
        itinerary: [
            "Day 1: Arrival in Shimla, local sightseeing",
            "Day 2: Kufri excursion",
            "Day 3: Mall Road shopping",
            "Day 4: Departure"
        ],
        bestTimeToVisit: "March to June",
    },
    {
        id: 6,
        location: "Andaman Islands, India",
        days: 5,
        people: 15,
        description: "Experience island life with crystal-clear beaches and exotic marine life.",
        image: LocationImage6,
        storyProfile: StoryProfile6,
        expensePerPerson: 30000,
        weather: "Tropical, 25-28°C",
        itinerary: [
            "Day 1: Arrival at Port Blair",
            "Day 2: Havelock Island beaches",
            "Day 3: Snorkeling at Elephant Beach",
            "Day 4: Ross Island visit",
            "Day 5: Departure"
        ],
        bestTimeToVisit: "October to May",
    },
    {
        id: 7,
        location: "Darjeeling, India",
        days: 4,
        people: 20,
        description: "Famous for tea gardens and a perfect getaway in the lap of the Himalayas.",
        image: LocationImage7,
        storyProfile: StoryProfile7,
        expensePerPerson: 14000,
        weather: "Cool, 10-18°C",
        itinerary: [
            "Day 1: Arrival in Darjeeling, local sightseeing",
            "Day 2: Tiger Hill sunrise",
            "Day 3: Tea garden visit",
            "Day 4: Departure"
        ],
        bestTimeToVisit: "March to June",
    },
    {
        id: 8,
        location: "Jaisalmer, India",
        days: 6,
        people: 12,
        description: "A cultural journey through the deserts and palaces of Rajasthan.",
        image: LocationImage8,
        storyProfile: StoryProfile8,
        expensePerPerson: 18000,
        weather: "Hot, 20-35°C",
        itinerary: [
            "Day 1: Arrival and Jaisalmer Fort",
            "Day 2: Desert safari and camping",
            "Day 3: Patwon Ki Haveli visit",
            "Day 4: Camel ride in the dunes",
            "Day 5: Local shopping",
            "Day 6: Departure"
        ],
        bestTimeToVisit: "October to March",
    },
    {
        id: 9,
        location: "Mysore, India",
        days: 3,
        people: 15,
        description: "Known for its palaces and rich history, Mysore is a cultural gem.",
        image: LocationImage9,
        storyProfile: StoryProfile9,
        expensePerPerson: 9000,
        weather: "Pleasant, 20-25°C",
        itinerary: [
            "Day 1: Mysore Palace and Chamundi Hill",
            "Day 2: Brindavan Gardens",
            "Day 3: St. Philomena's Church and departure"
        ],
        bestTimeToVisit: "October to February",
    },
];

export const addNewTrip = (trip) => {
    TripPackages = [...TripPackages, trip];
    return TripPackages;
};

export default TripPackages;
