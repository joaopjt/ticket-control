# TO DO LIST:


##Database

> In mind of one simple QR Code ticket to be validated only one time, the project
will be fast. In a simple Database, with USERS and TICKETS table. So, we need:

- Create Tickets Table with:
  - User who own the ticket
  - Ticket hash (Encrypted)

- Users Table with:
  - User data

> * The ticket hash from QR Code, will be encrypted with crypto (using sha-256).
> I will create a migration of this, so, dont worry at all.
> You will need to run `knex migrate:latest` to be ready to go.

##Routes
- Route for camera "scan" and send the QR Code (Can be the index).

##Endpoints
- Endpoint to receive the QR Code scan and validate.

## ANYTHING I FORGOT??