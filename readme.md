# API Vehicles
A very basic Rest API using Node.js and Typescript

## Steps to run the project
1. `$ yarn` to install dependencies
1. Use the `.env.example` file to create your own `.env` configuration file
1. `$ yarn start` to execute the application
1. Open your browser at `http://localhost:3000`

## Available endpoints
- `GET /vehicle` Retrieve all vehicles collection
- `GET /vehicle/:id` Retrieve a specific vehicle by their ID
- `POST /vehicle` Create a new vehicle
- `PUT /vehicle/:id` Update a vehicle
- `DELETE /vehicle/:id` Delete a specific vehicle by ID

## Required payload to create a vehicle
```
{
  "placa": "string",
  "chassi": "string",
  "renavam": "string",
  "modelo": "string",
  "marca": "string",
  "ano": "number"
}
```
