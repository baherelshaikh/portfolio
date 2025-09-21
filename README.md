# SweetTalkr App

SweetTalkr is a full-stack chat application built with Node.js (Express backend) and Vite (React/Vue frontend), containerized using Docker and Docker Compose. The backend handles API routes and database interactions, while the frontend provides a responsive UI served via Nginx.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Docker Desktop**: Version 20.10 or higher (with WSL 2 enabled on Windows for optimal performance).
- **Docker Compose**: Version 2.0 or higher (included with Docker Desktop).
- **Node.js**: Version 18 or higher (optional for local development outside Docker).
- **PostgreSQL Database**: An external database instance (e.g., Nhost, Neon, or a local Postgres server). The app uses a \`DATABASE_URL\` environment variable for connection.
- **Git**: For cloning the repository.

No manual \`npm install\` is required—dependencies are installed automatically during the Docker build process.

## Quick Start

1. **Clone the Repository**:
   \`\`\`bash
   git clone https://github.com/<your-username>/SweetTalkr-App.git
   cd SweetTalkr-App
   \`\`\`

2. **Configure Environment Variables**:
   - Copy the example environment file:
     \`\`\`bash
     cp .env.example .env
     \`\`\`
   - Edit \`.env\` with your database connection string:
     \`\`\`
     DATABASE_URL=postgresql://username:password@host:port/dbname?sslmode=require
     \`\`\`
     - Replace with your Nhost or Neon connection details. For local Postgres, use \`postgresql://user:password@localhost:5432/sweettalkr\`.
   - Optional: For the frontend, add \`VITE_API_URL=http://localhost:5000\` if needed for API calls.

3. **Build and Run the Project**:
   \`\`\`bash
   docker-compose build
   docker-compose up
   \`\`\`
   - This builds the images for \`frontend\` and \`backend\` services and starts them in the foreground.
   - To run in the background: \`docker-compose up -d\`.
   - To stop: \`docker-compose down\` (add \`--volumes\` to remove data volumes if using local Postgres).

4. **Access the Application**:
   - **Frontend**: Open [http://localhost:3000](http://localhost:3000) in your browser (served via Nginx).
   - **Backend API**: Test endpoints at [http://localhost:5000](http://localhost:5000) (e.g., \`curl http://localhost:5000/api/health\` if available).
   - Logs: View with \`docker-compose logs\` or \`docker-compose logs backend\` for service-specific output.

The app should be fully running in under 2 minutes, with the backend connected to your database and the frontend proxying API calls to the backend.

## Project Structure
```
SweetTalkr-App/
├── backend/                 # Node.js/Express backend
│   ├── Dockerfile           # Builds backend image
│   ├── package.json         # Dependencies (e.g., Express, pg)
│   ├── server.js            # Main server file
│   └── ...                  # Routes, models, etc.
├── frontend/                # Vite-based frontend
│   ├── Dockerfile           # Multi-stage build (Vite → Nginx)
│   ├── package.json         # Dependencies (e.g., Vite, React/Vue)
│   ├── src/                 # Source code (App.jsx, components)
│   └── ...                  # Assets, config
├── docker-compose.yml       # Orchestrates services
├── .gitignore               # Excludes node_modules, .env, etc.
├── .env.example             # Template for environment variables
└── README.md                # This file

```
- **Services**:
  - **Backend**: Runs Express on port 5000, connects to PostgreSQL via \`DATABASE_URL\`.
  - **Frontend**: Builds Vite app and serves static files via Nginx on port 80 (mapped to 3000).

## Database Setup

The app requires a PostgreSQL database. Options:

### Using External Database (Recommended: Nhost or Neon)
- **Nhost**: Get the connection string from Nhost Dashboard > Settings > Database.
- **Neon**: Get the connection string from Neon Console > Connection Details.
- Update \`.env\` with \`DATABASE_URL\` (e.g., \`postgresql://neonuser:neonpass@ep-cool-project-123456.us-east-2.aws.neon.tech/neondb?sslmode=require\`).

## Development Workflow

- **Code Changes**: Edit files in \`frontend/src\` or \`backend\`. Restart with \`docker-compose up --build\` to apply changes.
- **Local Development (Outside Docker)**:
  - Backend: \`cd backend && npm install && npm start\`.
  - Frontend: \`cd frontend && npm install && npm run dev\` (runs on port 5173).
- **Production Build**: The \`frontend/Dockerfile\` automatically builds the Vite app (\`npm run build\`) and serves via Nginx.

#!/bin/bash

# Script to generate README.md snippet for .env configuration in SweetTalkr App

## Configure Environment Variables (Backend Folder)

- Copy the example environment file:
  ```bash
  cp .env.example .env
  ```
- Edit `.env` with the following values, replacing placeholders with your own where necessary:
  ```
  # JWT configuration for backend authentication
  JWT_SECRET=yoursecret
  JWT_LIFETIME=yourtime

  # Backend port
  PORT=5000

  # Database connection (Neon; replace with your Nhost or local Postgres details)
  NHOST_POSTGRES_HOST=yourdbhost
  NHOST_POSTGRES_PORT=yourdbport
  NHOST_POSTGRES_DATABASE=yourdbname
  NHOST_POSTGRES_USER=yourdbuser
  NHOST_POSTGRES_PASSWORD=yourdbpassword

  # Environment mode
  NODE_ENV=development

  ```
- **Notes**:
  - Replace `JWT_SECRET` with a secure, unique key for production (generate with `openssl rand -base64 32`).
  - Use your Neon or Nhost database credentials for `NHOST_POSTGRES_*` variables.
  - For local Postgres, use `NHOST_POSTGRES_HOST=db` if using the Dockerized `db` service.
  - Set `NODE_ENV=production` for production deployments.

## Troubleshooting

- **Build Fails with Rollup Error** (\`Cannot find module '@rollup/rollup-linux-x64-gnu'\`):
  \`\`\`bash
  cd frontend
  rm -rf node_modules package-lock.json
  npm install --legacy-peer-deps
  cd ..
  docker-compose build --no-cache
  \`\`\`

- **Database Connection Error**:
  - Verify \`DATABASE_URL\` in \`.env\` (test with \`psql "<DATABASE_URL>"\`).
  - For local Postgres, ensure the \`db\` service is uncommented in \`docker-compose.yml\`.

- **Port Conflicts**:
  - Change ports in \`docker-compose.yml\` (e.g., \`3001:80\` for frontend).

- **Logs**:
  \`\`\`bash
  docker-compose logs backend  # Backend-specific
  docker-compose logs frontend # Frontend-specific
  \`\`\`

- **Clean Up**:
  \`\`\`bash
  docker-compose down --volumes --remove-orphans
  docker system prune -f  # Remove unused images
  \`\`\`

## Contributing

1. Fork the repository.
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`).
3. Commit changes (\`git commit -m 'Add some amazing feature'\`).
4. Push to the branch (\`git push origin feature/amazing-feature\`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For questions, open an issue on GitHub or contact the maintainer. Happy chatting with SweetTalkr! 🚀