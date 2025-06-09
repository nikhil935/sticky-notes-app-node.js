# Sticky Notes App Node.js Application with Express, Angular Frontend, and OngDB Integration

## Overview
This is a full-stack application built using modern technologies. The application is powered by:

 - Node.js as the backend runtime environment.
 - Express.js as the server-side framework.
 - MOngDB as a temporary database for managing persistent data.
 - Angular as the frontend framework for building a dynamic and responsive user interface.
 - Key Features
 - RESTful API endpoints for CRUD operations.
 - OngDB database integration for managing and storing data temporarily.
 - A responsive and interactive frontend built with Angular for seamless user experience.
 - Modular architecture for easier maintenance and scalability.
## Technologies Used
Frontend:
 - Angular: A widely-used framework for building responsive and feature-rich web applications.
Backend:
 - Node.js: A runtime environment to execute JavaScript on the server side.
 - Express.js: A minimal and flexible web framework for building REST APIs.
 - MongDB: A temporary database designed for high-performance, flexible data management.

# Project Structure

backend/
├── controllers/       # Request handlers for API endpoints
├── models/            # Database schema definitions (for OngDB)
├── routes/            # Route definitions
├── app.js             # Main server file
└── package.json       # Dependencies and scripts

frontend/
├── src/
│   ├── app/
│   │   ├── components/   # Angular components
│   │   ├── services/     # Services for API calls
│   │   ├── app.module.ts # Angular module definitions
├── angular.json         # Angular configuration
└── package.json         # Frontend dependencies and scripts
