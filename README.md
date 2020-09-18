# REST API for actors, and their movies.

## Actor endpoints

**`GET /actors`**

- Return list of all actors

---

**`POST /actors`**

- Add actor

---

**`GET /actors/:id`**

- Get one actor

---

**`PUT /actors/:id`**

- Update one actor

---

**`DELETE /actors/:id`**

- Delete one actor
- Can optionally delete all of the actors movies with `deleteMovies=true` as a query parameter

---

**`DELETE /actors/:actorId/:movieId`**

- Delete movie from actor's movie list

---

**`POST /actors/:actorId/movies`**

- Add movie to actor's movie list
- Need to encode a movieId in the request body

---

**`GET /actors/movies/:rating`**

- Get all actors that have stared in a movie with `rating` rating or greater

## Movie Endpoints

**`GET /movies`**

- Get list of all movies
- Can filter by date
- e.g. `GET /movies?startYear=1995&endYear=2005`

---

**`POST /movies`**

- Add movie

---

**`GET /movie/:id`**

- Get one movie

---

**`PUT /movie/:id`**

- Update one movie

---

**`DELETE /movies/:id`**

- Delete a movie

---

**`DELETE /movies/:movieId/:actorId`**

- Remove actor from movie list

---

**`PUT /movies/:movieId/:actorId`**

- Add actor to movies list

---

**`DELETE /movies`**

- Deletes all movies within a date range
- `startYear` and `endYear` are required body parameters
