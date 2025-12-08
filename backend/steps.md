### create a fake backend

## install json-server

`npm i -g json-server`

## create a backend folder with file db.json inside

## launch the json-server

`json-server --watch db.json`

### Creating a module with lazy loading

`ng g m features/feedback --route feedback --module app.module`

### Creating a component

`ng g c features/feedback/form --skip-tests`

### Creating a service

`ng g s shared/data/feedback --skip-tests`

### Generating a stand alone component

`ng g c layout/card --standalone=true --skiptests`
