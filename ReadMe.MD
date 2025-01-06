# Ghibli Explorer Backend

A RESTful API built with Express.js, TypeScript, and MongoDB to serve Studio Ghibli film data. This backend service supports the [Ghibli Explorer Frontend](https://ghibli-explorer-one.vercel.app/).

## Features

- RESTful API endpoints for Studio Ghibli films
- MongoDB Atlas integration for data persistence
- TypeScript implementation
- Swagger API documentation
- CORS enabled for frontend integration
- Vercel deployment ready

## Live Endpoints

- API Base URL: `https://ghibli-explorer-api.vercel.app`
- API Documentation: `https://ghibli-explorer-api.vercel.app/api-docs`
- Get All Films: `https://ghibli-explorer-api.vercel.app/api/films`

## API Endpoints

- `GET /api/films` - Get all films
- `GET /api/films/:id` - Get a specific film by ID
- `POST /api/films` - Create a new film
- `PUT /api/films/:id` - Update a film
- `DELETE /api/films/:id` - Delete a film

## Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- MongoDB Atlas account
- Vercel account (for deployment)

## Local Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ghibli-explorer-api
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=development
CORS_ORIGIN=http://localhost:4200
```

4. Start the development server:
```bash
yarn dev
```

The API will be available at `http://localhost:3000`

## Project Structure

```
/
├── src/
│   ├── controllers/
│   │   └── filmController.ts
│   ├── models/
│   │   └── Film.ts
│   ├── routes/
│   │   └── filmRoutes.ts
│   ├── swagger/
│   │   └── swagger.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── vercel.json
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `MONGODB_URI` - MongoDB Atlas connection string
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGIN` - Allowed origin for CORS

## Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `NODE_ENV` (set to 'production')
   - `CORS_ORIGIN`
4. Deploy

## Local Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server

## Technology Stack

- Express.js - Web framework
- TypeScript - Programming language
- MongoDB Atlas - Database
- Swagger - API documentation
- Vercel - Deployment platform

## Data Model

Film object structure:
```typescript
{
    title: string;          // English title
    original_title: string; // Japanese title
    description: string;    // Film description
    director: string;       // Director's name
    release_date: string;   // Release year
    running_time: string;   // Duration in minutes
    rt_score: string;      // Rotten Tomatoes score
}
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## Frontend Repository

The frontend application can be accessed at [https://ghibli-explorer-one.vercel.app/](https://ghibli-explorer-one.vercel.app/)