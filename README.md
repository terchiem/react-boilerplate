# About

A full stack application for creating and retrieving strings from an array on the server. The server utilizes Node/Express and provides endpoints to get all strings and to add a string. The client has one page to display a list of all strings and one page with UI to add a string to the array.

# Libraries

- React Router
- Redux
- Redux Saga
- Reselect
- Styled Components
- Jest

# Routes

## Client

- `/` - Displays a list of all posts
- `/new` - Form to add a new post

## Server

- `GET /api` - Returns the array of posts

  - Returns `{ posts: ['a', 'b', 'c', ...] }`

- `POST /api` - Adds a new post to the array and returns the post on success
  - Required body `{ post: 'new post' }`
  - Returns `{ post: 'new post' }`

# Client Container / Component Hierarchy

- App - Main app container
  - Header - Displays app header and navigational links
  - Switch
    - HomePage `/` - Fetches and displays a list of all posts
      - PostList - Presentational component to display posts
    - NewPostPage `/new` - Form to create a new post
    - NotFoundPage - Not found page for unknown routes

# Redux Store

- HomePage `home`
  - `loading` - a bool indicating loading status
  - `error` - an error response object from the server
  - `posts` - an array of posts from the server
- NewPostPage `newPost`
  - `inputValue` - the current value of the text input
