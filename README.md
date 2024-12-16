# IoT Device Management API

This is a NestJS-based server that allows you to manage IoT devices. It uses PostgreSQL as the database hosted on Railway and GraphQL to facilitate queries for creating, editing, and deleting IoT devices. This API was created as part of a technical test for Vodafone.

The database can be tested via GraphQL and is hosted at:
[https://vodafone-backend-production.up.railway.app/graphql](https://vodafone-backend-production.up.railway.app/graphql)


## Features

- **GraphQL API**: Provides flexible and efficient querying and mutation operations for IoT devices.
- **PostgreSQL Database**: Uses a PostgreSQL database hosted on Railway for persistent storage.
- **CRUD Operations**: Allows the creation, update, and deletion of IoT devices.
  - **Create Device**: Add a new IoT device with its details.
  - **Update Device**: Modify the details of an existing IoT device.
  - **Delete Device**: Remove an IoT device by its ID.
  - **Get All Devices**: Retrieve all IoT devices stored in the database.

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source relational database used to store IoT device information.
- **GraphQL**: A query language for your API that allows clients to request only the data they need.
- **Railway**: A platform for deploying databases and other backend services, used here to host the PostgreSQL database.

## Installation

### Prerequisites

- Node.js (version 16.x or higher)
- PostgreSQL (database hosted on Railway)
- Environment variables for database connection
