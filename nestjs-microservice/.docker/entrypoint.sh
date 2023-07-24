#!/bin/bash

npm install 

npx prisma generate dev 

npm run start:dev ; npm run command simulate-assets-price