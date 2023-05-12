export interface Product {
    "productId": number,
    "productName": String,
    "price": number,
    "qty": number,
    "itemCost": number,
    "description": String,
    "imageUrl": String,
    "verified": true,
    "user": {
        "userId": number,
        "name": String,
        "email": String,
        "password": String,
        "telephoneNumber": String,
        "username": String,
        "isVerified": true,
        "isFullyVerified": false,
        "verifiedBy": String,
        "roles": [
            {
                "roleId": number,
                "roleName": String
            }
        ]
    },
    "category": null
}