# High Score API
## Prerequisites
- a URL to a MongoDB server as an environment variable called `HIGH_SCORE_API_DB`
- Node.js

## Getting Started
Clone the repository, install dependencies and run the server:
```sh
$ https://github.com/nickypy/high-score-api.git
$ cd high-score-api
$ npm i
$ node server.js
```
The server should be running now on `http://localhost:8080`.

## Sample Requests
### Get all scores
```sh
$ curl http://localhost:8080/scores
```

### Get all scores from highest to lowest
```sh
$ curl http://localhost:8080/scores/top
```

### Get all scores from today, sorted by highest to lowest
```sh
$ curl http://localhost:8080/scores/today
```

### Get all scores from the past month, sorted by highest to lowest
```sh
$ curl http://localhost:8080/scores/month
```

### Get all scores, sorted by most recent
```sh
$ curl http://localhost:8080/scores/recent
```

### Add a new score
```sh
$ curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"Bert Macklin","score":20}' \
  http://localhost:8080/scores
```

Output:
```json
{
    "_id":"5b259faa926dac2c12f319f4",
    "name":"Bert Macklin",
    "score":20,
    "date":"2018-06-16T23:39:22.769Z",
    "__v":0
}
```

### Delete a user by ID
```sh
$ curl --header "Content-Type: application/json" \
  --request DELETE \
  --data '{"id":"5b259faa926dac2c12f319f4"}' \
  http://localhost:8080/scores
```