# Task List Application

A responsive single-page application built with React, Material UI, and TanStack Router that manages and displays task items.

## Technical Decisions

- **React + TypeScript**: Type safety and improved developer experience
- **TanStack Router**: Type-safe routing with excellent DX and performance
- **Material UI**: Production-ready components with consistent design language
- **Vite**: Modern build tool offering superior DX and build performance

## Architecture Decisions Records (ADRs)

See [doc/architecture/decisions](doc/architecture/decisions) for detailed technical decisions and their rationales.

## Getting Started

```bash
# Install dependencies
yarn install

# Run development server
yarn dev


# Build for production
yarn build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── routes/        # TanStack Router routes
├── theme/         # MUI theme configuration
```

## Development Guidelines

- Follow conventional commits for version control
- Components should be focused and reusable

