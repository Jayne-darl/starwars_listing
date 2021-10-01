# starwars_listing

An API to view starwars movies, sort and filter characters by name, gender and height and comment on each movie

## Features
* Can view all movies a movie with associated comments and number of comments
* Can comment on a movie
* Can get all comment and a comment by the id
* Can get all the characters and can filter by gender
* Can sort characters by gender, name or height


## Tools used in Project Creation
* Node.js & Express.
* Git
* Heroku

## Requirements and Installation
These instructions will get you a copy of the project up and running on your local machine for development

To install and run this project you would need to have installed:
* Git
* Node 

To run: 

``` 
$ git clone https://github.com/Jayne-darl/starwars-listing.git
$ cd starwars-listing.
$ npm install
$ npm start 
```

## HTTP Request Methods

These are the HTTP request methods used in this project.

| Method	| Action |
| --- | --- |
| `GET` |	This method is used to get a resource|
| `POST`	| This method is used to create a resource or send data |

## HTTP Response Status Codes

These are the HTTP response codes used in this project.

| Status Codes | Indication |
| --- | --- |
| `200` |	This OK status code indicates that a request has succeeded |
| `201` |	This created status code indicates that a resource has been created |
| `400` |	This bad request error status code indicates that the request sent to the server is incorrect |
| `404` |	Returned when the request is valid, but the resource you try to access does not exist, or is outside your scope |
| `500` |	This internal server error status code indicates that something has gone wrong on the web server |

## API Endpoints
| Endpoint |	Functionality |
| --- | --- |
| GET /api/v1/movies |	Fetch all movies |
| GET /api/v1/movies:id |	Fetch a movie |
| GET /api/v1/characters |	Fetch all characters |
| GET /api/v1/characters?page=i |	Fetch all character by pages |
| GET /api/v1/characters?page=i&gender=item |	Filter charcters by gender |
| GET /api/v1/characters?page=i&sort_by=item&order_by=ele |	sort by a field in a particular order |
| POST /api/v1/comment/	| Post comment on a movie |
| GET /api/v1/comment/:id	| Get a comment |
| GET /api/v1/comment/ | Get all comments in reverse chronological order |

## The API Endpints are hosted on heroku
https://starwar-movies.herokuapp.com/api/v1/

## The API Endpoints are documented with swagger and apidocs
https://starwar-movies.herokuapp.com/documentation

## Author
Jane U. Onwumere

## License
This is licensed for your use, modification and distribution under the [MIT license](https://opensource.org/licenses/MIT).
