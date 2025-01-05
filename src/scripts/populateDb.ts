import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Film } from '../models/Film';

dotenv.config();

const films = [
    {
        title: "Spirited Away",
        original_title: "千と千尋の神隠し",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
        director: "Hayao Miyazaki",
        release_date: "2001",
        running_time: "125",
        rt_score: "97"
    },
    {
        title: "My Neighbor Totoro",
        original_title: "となりのトトロ",
        description: "Two young girls move with their father to a new house near a magical forest where they befriend the gentle forest spirit Totoro.",
        director: "Hayao Miyazaki",
        release_date: "1988",
        running_time: "86",
        rt_score: "93"
    },
    {
        title: "Princess Mononoke",
        original_title: "もののけ姫",
        description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
        director: "Hayao Miyazaki",
        release_date: "1997",
        running_time: "134",
        rt_score: "93"
    },
    {
        title: "Howl's Moving Castle",
        original_title: "ハウルの動く城",
        description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
        director: "Hayao Miyazaki",
        release_date: "2004",
        running_time: "119",
        rt_score: "87"
    },
    {
        title: "Kiki's Delivery Service",
        original_title: "魔女の宅急便",
        description: "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        director: "Hayao Miyazaki",
        release_date: "1989",
        running_time: "102",
        rt_score: "96"
    },
    {
        title: "Ponyo",
        original_title: "崖の上のポニョ",
        description: "A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.",
        director: "Hayao Miyazaki",
        release_date: "2008",
        running_time: "100",
        rt_score: "92"
    },
    {
        title: "Castle in the Sky",
        original_title: "天空の城ラピュタ",
        description: "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
        director: "Hayao Miyazaki",
        release_date: "1986",
        running_time: "124",
        rt_score: "95"
    },
    {
        title: "The Wind Rises",
        original_title: "風立ちぬ",
        description: "A look at the life of Jiro Horikoshi, the designer of the Mitsubishi A5M and A6M Zero fighter aircraft during World War II.",
        director: "Hayao Miyazaki",
        release_date: "2013",
        running_time: "126",
        rt_score: "88"
    }
];

async function populateDatabase() {
    try {
        const MONGODB_URI = process.env.MONGODB_URI;
        if (!MONGODB_URI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }

        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing data
        await Film.deleteMany({});
        console.log('Cleared existing films');

        // Insert new data
        await Film.insertMany(films);
        console.log('Database populated successfully');

        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error populating database:', error);
        process.exit(1);
    }
}

populateDatabase();