# TO DO LIST:


##Database

> In mind of one simple QR Code ticket to be validated only one time, the project
will be fast, with a simple Database, with USERS and TICKETS table. So, we need:

- Create Tickets Table with:
  - User who own the ticket
  - Ticket hash (Encrypted)

- Users Table with:
  - User full name
  - Born date
  - Document number (just for represente, without any validation for this project)

> * The ticket hash from QR Code, will be encrypted with crypto (with sha-256).
> I will create a migration of this, so, dont worry at all. You will need to run `knex migrate:latest` and will be ready to go.

##Routes

- Route for camera "scan" and send the QR Code (Can be the index).

##Endpoints

- Endpoint to receive the QR Code scan and validate.

## ANYTHING IN MIND FOR MORE??