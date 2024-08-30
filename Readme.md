

# YourHR Job Search Service

Welcome to YourHR, a web application designed to help job seekers find ideal job roles based on their qualifications and preferences. This project showcases a functional job search platform where users can sign up and submit their resumes.

## Project Overview

YourHR is a job search service that provides a simple and user-friendly platform for job seekers to register and upload their resumes. The application includes a frontend interface for user interaction and a backend system for secure data storage.

## Features

- **User Signup:** Allows job seekers to fill out a signup form with their personal information.
- **Resume Upload:** Users can upload their resumes for further processing.
- **Responsive Design:** The website is designed to be functional across different devices.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (or any other SQL database)
- **Deployment:** Vercel for frontend, [Your Backend Hosting Service] for backend

## Getting Started

### Prerequisites

- Node.js and npm installed
- Java Development Kit (JDK) for BFG Repo-Cleaner (if you need to clean your repository)
- Git installed

### Setup Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/rushikeshwayal/YourHR.git
    cd YourHR
    ```

2. **Install Dependencies:**

    - **Frontend:**

      Navigate to the frontend directory and install dependencies:

      ```bash
      cd client
      npm install
      ```

    - **Backend:**

      Navigate to the backend directory and install dependencies:

      ```bash
      cd server
      npm install
      ```

3. **Configure Environment Variables:**

   Create a `.env` file in the backend directory and add the necessary environment variables. Refer to `.env.example` for required variables.

4. **Run the Application:**

    - **Start the Backend Server:**

      ```bash
      cd server
      node index 
      ```

    - **Start the Frontend Development Server:**

      ```bash
      cd client
      npm run dev
      ```

5. **Access the Application:**

    Open your browser and navigate to `http://localhost:3000` to access the YourHR application.

## Project Details

### Frontend

The frontend of the application is built using React. It includes:

- **Signup Page:** A form where users can enter their personal information and upload their resumes.
- **Dashboard:** A basic page to show user details and uploaded resumes.

### Backend

The backend is built with Node.js and Express.js. It handles:

- **User Registration:** API endpoints for user signup and resume upload.
- **Data Storage:** Secure storage of user information and resumes in the database.

### Database

The application uses PostgreSQL (or another SQL database) to store user information and resumes securely.

### Deployment

- **Frontend:** Deployed on Vercel. [Link to Deployment]
- **Backend:** Deployed on [Your Backend Hosting Service]. [Link to Backend] --- will be updated soon



## Troubleshooting

- **Java Installation Error:** Ensure Java is installed and configured correctly. Check `java -version` for verification.
- **Git LFS Issues:** If you encounter issues with Git LFS, ensure it is properly set up and configured.

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements.

## Contact

For any questions or feedback, please reach out to:

- **Email:** rushikeshwayal6@gmail.com
- **GitHub:** [rushikeshwayal](https://github.com/yourusername)

