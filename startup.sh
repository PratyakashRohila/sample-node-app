#!/bin/bash
echo "Running migartion ======================================>"
npm run migration
echo "Running sample-node-app application ===============================>"
node app.js
