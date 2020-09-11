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
- Can optionally delete all of the actors movies with `deleteMovies: true` in the request body

---

**`PUT /actors/:actorId/:movieId`**

- Add movie to actor's movie list

---

## Movie Endpoints

**`GET /movies`**

- Get list of all movies

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
