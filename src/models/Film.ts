import mongoose from 'mongoose';

export interface IFilm {
    title: string;
    original_title: string;
    description: string;
    director: string;
    release_date: string;
    running_time: string;
    rt_score: string;
}

const filmSchema = new mongoose.Schema<IFilm>({
    title: { type: String, required: true },
    original_title: { type: String, required: true },
    description: { type: String, required: true },
    director: { type: String, required: true },
    release_date: { type: String, required: true },
    running_time: { type: String, required: true },
    rt_score: { type: String, required: true }
});

export const Film = mongoose.model<IFilm>('Film', filmSchema);