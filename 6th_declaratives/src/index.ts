import axios from 'axios';
import _ from 'lodash';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
.then(response => {
    console.log("Woo!!!")
    printUser(response.data)
})
.catch(error => {
    console.log("ERROR!!!", error);
});

axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log("Woo!!!")
    response.data.forEach(printUser)
})
.catch(error => {
    console.log("ERROR!!!", error);
});


function printUser(user: User) {
    console.log(user.name);
    console.log(user.email)
    console.log(user.phone)
}


