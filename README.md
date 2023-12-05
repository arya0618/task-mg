# Task Managment App

This repository contains two microservices (`user-service` and `task-service`) built with Nest.js. Additionally, there's a Docker Compose file for setting up a MongoDB database.
Task: https://docs.google.com/document/d/1bocTjds2og4iKrRLk7qn2T1fmCUleDhnb8DiQAMH-TI/edit#heading=h.r21jfu5lltc2

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (Node Package Manager)
- Docker (for running the MongoDB container)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/arya0618/task-mg.git
   cd task-mg

1. Start database server

   ```bash
   cd docker
   docker-compose up -d

2. User-service

   ```bash
   cd user-service
   npm install
   npm run start

3. Task-service

   ```bash
   cd task-service
   npm install
   npm run start
