# To Do App

A simple To Do application frontend built with React + TypeScript + Vite. The frontend is complete in this repository; a Node/Express backend is planned and will be added to provide a persistent API and data storage.

This README documents the current frontend, how to run it, and the planned Express backend (API contract and development notes).

**Frontend:** React, TypeScript, Vite

**Status:** Frontend implemented. Backend (Express) — planned.

--

**Repository layout (frontend)**

- `index.html` — app entry
- `src/` — React + TypeScript source
  - `main.tsx`, `App.tsx`, `Header.tsx`, `Content.tsx`, `AddToDo.tsx`, `ShowToDo.tsx`, `ToDo.tsx`
- `public/` — static assets
- ESLint + TypeScript config files

--

## Development (frontend)

Install dependencies:

```bash
npm install
```

Run the development server (Vite):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

--

## Planned Backend (Express)

I'll implement a Node.js + Express backend to support the frontend. Goals and decisions:

- Serve a REST API for CRUD operations on todos.
- Use a simple JSON-based API initially, then add a persistent database (MongoDB or PostgreSQL) later.
- Keep backend in a top-level `server/` folder (separate package.json) or a monorepo layout.
- Use environment variables for configuration and `nodemon` for dev iteration.

Suggested backend folder structure:

```
server/
  package.json
  src/
    index.ts       # express app + routes
    routes/todos.ts
    controllers/todoController.ts
    models/         # DB models (e.g., Mongoose or Prisma)
    config/
      db.ts
    middleware/
      errorHandler.ts
  .env
```

### API contract (initial)

Base URL: `/api/todos`

- GET `/api/todos` — list todos
  - Response: 200 JSON array of todos

- POST `/api/todos` — create a todo
  - Body: `{ "text": string, "completed": boolean? }`
  - Response: 201 created todo object

- PUT `/api/todos/:id` — update a todo
  - Body: `{ "text"?: string, "completed"?: boolean }`
  - Response: 200 updated todo object

- DELETE `/api/todos/:id` — delete a todo
  - Response: 204 no content

Example curl (create):

```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text":"Buy milk"}'
```

Notes:

- Enable CORS so the frontend (dev server) can talk to the API.
- Add validation (e.g., `express-validator`) and centralized error handling.
- Add basic tests (Jest / Supertest) for API endpoints.

--

## Backend scripts to add (when server is created)

In `server/package.json`:

```json
{
  "scripts": {
    "dev": "nodemon --watch src --exec ts-node src/index.ts",
    "start": "node dist/index.js",
    "build": "tsc"
  }
}
```

--

## Contribution & Next Steps

- If you'd like, I can scaffold the Express backend now (TypeScript, Express, basic routes, and DB adapter). Would you prefer MongoDB (Mongoose) or PostgreSQL (Prisma)?
- For small deployments, a single `server/` folder with its own package.json is simplest. For a monorepo approach we can use workspaces.

## Contact

Questions or suggestions — open an issue or contact the project maintainer.

--

_README created/updated by GitHub Copilot assistant — ask me to scaffold the Express backend next._
