const stuff: (string|number)[] = ["a", "b", "c"];

const color: [number, number, string] = [255, 0, "a"]  ;

type HTTPResponse = [number, string];

const response: HTTPResponse = [200, "OK"]
const noresponse: HTTPResponse = [404, "Not Found"]

response.push(123);
// response[0] = "202" // Error

const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]];


//ENUMS

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
};

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
};

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
    UP= "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
};

