# Cloud Deployment Project

## Overview
This project is a cloud deployment of a web application that showcases the best fantasy manhwa webtoons. The application is hosted on an AWS EC2 instance and utilizes AWS S3 for static file storage.

## Technologies Used
- **Node.js**: Backend server
- **Express**: Web framework for Node.js
- **AWS S3**: For storing static assets (images, stylesheets, etc.)
- **PM2**: For process management and keeping the application running
- **Git**: Version control
- **AWS RDS**: For database management
- **AWS Certificate Manager**: For SSL certificates

## Prerequisites
Before running the web application, ensure you have the following installed:
- Node.js (version 18.20.2 or higher)
- Git
- AWS CLI (if you're deploying to AWS)

## Getting Started

### Cloning the Repository
Clone this repository to your local machine using:
```bash
git clone https://github.com/Anirudhem-30/cloud-deployment-project.git
cd cloud-deployment-project
```
## Installing Dependencies
Navigate to the project directory and install the required dependencies:
```bash
cd manhwa-app
npm install
```
## Running the Application
You can start the application using PM2 for process management. This ensures that the app will continue running even after you close the terminal:
```bash
pm2 start app.js --name "manhwa-app" --watch
```
## Accessing the Application
The application will be available at:
```bash
http://18.232.89.200:3000/
```

