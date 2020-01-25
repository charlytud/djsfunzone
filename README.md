### Eblocks Assessment:  warehouse

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes only.

### Prerequisites
For this project to run on you local machine you need to have installed: 
node.js (the project engine is "node": "13.0.1"), 

### Installing
### Config: 
1) From root navigate to server/config/config.js and update mongodb DATABASE with your local settings.
  default: {
    SECRET: 'S7HpZ5FcrW2mK',
    DATABASE: 'mongodb://localhost:27017/warehouse',
  } 

1) Navigate back to root and run: yarn install

2) From root navigate into ./client and run: yarn install

3) Back to root and run: yarn run dev
Both server and client will start and you should have the app running on your local machine.

### Seeding
To add dummy data in DATABASE
+++still deciding whether to use postman or use a faker

### Running the back end tests:
From root run: yarn run test

### Running the front end tests:
Navigate into ./client and run: yarn run test 

### Support:
If you find any problem install and running the app. Please do contact me.
Georges Cell: 071 618 1209 Email: georges.it@outlook.com

### Built With
create-react-app, mongoDB, Nodejs, Git, yarn 

### Tested With
mocha, chai, nock

### Author
Georges Charly Takoudjou