# Public API for HNG Stage 1 Task

Fun fact API: http://numbersapi.com/#42
https://en.wikipedia.org/wiki/Parity_(mathematics)

## Project Overview

This is a **Node.js** API that classifies numbers based on their mathematical properties and provides a fun fact about them. The **API** supports the following features:

- Determines whether a number is prime or perfect.

- Identifies additional properties (Armstrong number, odd, even).

- Computes the sum of the digits.

- Fetches a fun fact about the number using the Numbers API.

The API is built using **Express.js**, with **CORS** enabled, and utilizes external **APIs** for generating number facts.

## Setup Instructions

1️ Clone the Repository

## **Clone the repository**:

1.  git clone https://github.com/calculus-guy/number-classification-api
2.  Change to the project directory using: HNG_1_TASK
3.  Install the required dependencies using npm install:
4.  Run the API using: node index.js

**To Test the API with Postman:**

1. Install Postman if you haven't already.
2. Send a GET request with the URL as http://localhost:3000/api/classify-number:
   - Method: GET
   - URL: http://localhost:5000/api/classify-number

## API Documentation

**Endpoint**: GET /api/classify-number?number=<number>Query Parameter Parameter

Type
Required
Description
number
Integer
Yes
The number to classify

**Response Format (200 OK)**:
{
"number": 371,
"is_prime": false,
"is_perfect": false,
"properties": [
"armstrong",
"odd"
],
"digit_sum": 11,
"fun_fact": "371 is a narcissistic number."
}

**Response Format (400 Bad Request)**:
{
"number": "alphabet",
"error": true
}

Example Usage:

Localhost:
GET http://localhost:5000/api/classify-number?number=371

Deployed URL:
GET https://hng-1-task.vercel.app/api/classify-number?number=371

**Tech Stack**:

1.  Node.js (Runtime)
2.  Express.js (Web Framework)
3.  CORS (Cross-Origin Resource Sharing)
4.  Axios (For external API calls)

🌍 Deployment

This API is publicly deployed at: https://hng-1-task.vercel.app/api/classify-number?number=371

### Additional Backlink

To Hire a Nodejs Developer, use this: https://hng.tech/hire/nodejs-developers
