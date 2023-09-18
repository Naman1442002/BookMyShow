# BookMyShow API Documentation

## Endpoint 1: Get Last Ticket
- **HTTP Method:** GET
- **URL:** http://localhost:8080/api/booking/
- **Description:** This endpoint allows you to retrieve information about the last movie ticket booking.

### Request
  GET http://localhost:8080/api/booking/

### Response

- **200 OK**: Successful request. Returns the last booking data as JSON.
  Example Response (200 OK):
  ```json
  {
    "_id": "6123456789abcdef12345678",
    "movie": "Suraj par mangal bhari",
    "slot": "10:00 AM",
    "seats": {
      "A1": 4,
      "A2": 8,
      "A3": null,
      "A4": 5,
      "D1": 9,
      "D2": null
    }
  }

- **404 Not Found** : No booking found.
  Example Response (404 Not Found):
  ```json
  {
    "message": "No booking found."
  }

- **500 Internal Server Error** : Internal Server Error.
  Example Response (500 Internal Server Error):
  ```json
  {
    "message": "Internal Server Error"
  }

## Endpoint 2: Create New Ticket
- **HTTP Method:**: POST
- **URL**: http://localhost:8080/api/booking/
- **Description**: This endpoint allows you to create a new movie ticket booking.

### Request
   POST http://localhost:8080/api/booking/
```json
 {
  "movie": "Suraj par mangal bhari",
  "slot": "10:00 AM",
  "seats": {
    "A1": 4,
    "A2": 8,
    "A3": null,
    "A4": 5,
    "D1": 9,
    "D2": null
  }
}
```
### Response

- 200 OK: Successful request. Returns the created booking data as JSON.
Example Response (200 OK):
```json
{
  "message": "Booking Successful!!"
}
```
- 404 Not Found: Bad Request.
Example Response (404 Not Found):
```json
{
  "message": "Bad Request"
}
```
- 500 Internal Server Error: Internal Server Error.
Example Response (500 Internal Server Error):
```json
{
  "message": "Internal Server Error"
}
```

