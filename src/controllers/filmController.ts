// src/controllers/filmController.ts
import { Request, Response } from 'express';
import { Film } from '../models/Film';

// Define controller types
type RequestHandler = (req: Request, res: Response) => Promise<void>;

export const filmController = {
    getAllFilms: async (_req: Request, res: Response): Promise<void> => {
        try {
            const films = await Film.find();
            res.json(films);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching films' });
        }
    },

    getFilmById: async (req: Request, res: Response): Promise<void> => {
        try {
            const film = await Film.findById(req.params.id);
            if (!film) {
                res.status(404).json({ message: 'Film not found' });
                return;
            }
            res.json(film);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching film' });
        }
    },

    createFilm: async (req: Request, res: Response): Promise<void> => {
        try {
            const film = new Film(req.body);
            await film.save();
            res.status(201).json(film);
        } catch (error) {
            res.status(400).json({ message: 'Error creating film' });
        }
    },

    updateFilm: async (req: Request, res: Response): Promise<void> => {
        try {
            const film = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!film) {
                res.status(404).json({ message: 'Film not found' });
                return;
            }
            res.json(film);
        } catch (error) {
            res.status(400).json({ message: 'Error updating film' });
        }
    },

    deleteFilm: async (req: Request, res: Response): Promise<void> => {
        try {
            const film = await Film.findByIdAndDelete(req.params.id);
            if (!film) {
                res.status(404).json({ message: 'Film not found' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: 'Error deleting film' });
        }
    }
};