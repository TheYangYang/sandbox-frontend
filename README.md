# Sandbox Frontend

## Overview
Sandbox Frontend is a React-based frontend application built with TypeScript and Next.js. It serves as a sandbox project for experimenting with modern frontend development practices.

## Features
- **React & Next.js**: Leverages the power of React and Next.js for server-side rendering and static site generation.
- **TypeScript**: Ensures type safety and better developer experience.
- **Dynamic Metadata**: Metadata such as the app name and description are dynamically loaded from a centralized `config/metadata.json` file.
- **State Management**: Uses Zustand for lightweight and efficient state management.
- **Form Validation**: Integrated with Zod for schema-based form validation.
- **Localization**: Supports locale-based translations for a better user experience.

## Project Structure
```
.
├── app/                # Next.js app directory
├── components/         # Shared React components
├── config/             # Configuration files (e.g., metadata.json)
├── features/           # Feature-specific modules
├── public/             # Static assets
├── types/              # TypeScript type definitions
├── lib/                # Utility libraries (e.g., validation)
├── Dockerfile.dev      # Development Dockerfile
├── Dockerfile.prod     # Production Dockerfile
├── Dockerfile.staging  # Staging Dockerfile
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/TheYangYang/sandbox-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sandbox-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Build
Build the project for production:
```bash
npm run build
```

### Run
Run the production build:
```bash
npm start
```

## Metadata Configuration
The `config/metadata.json` file contains the following fields:
```json
{
  "appName": "Sandbox Frontend",
  "version": "1.0.0",
  "author": "TheYangYang",
  "description": "A sandbox project for frontend development."
}
```
These values are dynamically used in the application, such as setting the page title and meta description.

## License
This project is licensed under the MIT License.

