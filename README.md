# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### To run the project under docker container do the following

Build the image using the command -> `docker build -t task:latest .` \
Run teh docker container using -> `docker run -dp 3000:3000 --name frontendtask task:latest` \
Open localhost:3000 in the browser to see the app up and running

### Important Note :

Before running the project kindly set the API Keys in the file named "constants"
