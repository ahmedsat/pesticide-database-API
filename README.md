# pesticide-database

this API is a part of agricultural guide project, which is (this project) serve as a database for pesticides.

## routes

``` HTTP
GET /api/v1/pesticides : get all pesticides in the database .

GET /api/v1/pesticides/:registration_number : get a pesticide by registration number .

POST /api/v1/pesticides : add a new pesticide to the database .

PATCH /api/v1/pesticides/:registration_number : update a pesticide in the database .

DELETE /api/v1/pesticides/:registration_number : delete a pesticide from the database .
```

## future routes

future routes are not implemented yet.

``` HTTP
GET /api/v1/pesticides/:registration_number/:language : get a pesticide by registration number and language .
```
## future features

* [ ] pagination
* [ ] search by name
* [ ] search by chemical name
* [ ] search by target

