## Welcome to THALES's collaborative challenge around a touch table

This project aims to help the participant connect to the server and receive on the table. As there are 6 sensors connected to the table, the data received at client will contain an array of these 6 sensors. The stack in this project is made up of:
 
- Express : Back-end web application framework running on top of Node.js
- Redis : A node.js Redis client library
- Socket IO: it enables real-time bidirectional event-based communication

### Pre-requisites
* git - [Installation guide](https://git-scm.com/book/fr/v1/D%C3%A9marrage-rapide-Installation-de-Git) .  
* node.js and npm - [Download page](https://nodejs.org/en/download/) .    

### Installation 
Open the shell into the folder that contains server.js file and run the following commands:
``` 
npm install
node server.js
```
The description of the data can be found in this file 
```
./www/data.html
```