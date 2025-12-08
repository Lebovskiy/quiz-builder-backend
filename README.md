## Project setup

```bash
$ npm install
```

## Compile and run the project

````bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Start frontend and backend

```bash
# start backend
$ npm run start:dev

# in a new terminal, navigate to the frontend directory and start frontend
$ cd ../frontend
$ npm install
$ npm run start
````

## Set up database

1. Ensure you have a running database instance.
2. Update the backend `.env` file with your database connection details.
3. Run any migration:
   ```bash
   $ npm run migrate
   ```

## Create sample quiz

1. Use the API or interface to create a new quiz.
2. Example using `curl`:
   ```bash
   curl -X POST http://localhost:3000/api/quiz \
   	-H "Content-Type: application/json" \
   	-d '{"title": "Sample Quiz", "questions": [{"question": "What is 2+2?", "options": ["3", "4"], "answer": "4"}]}'
   ```
