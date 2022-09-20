"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userHelper = void 0;
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} has logged out`);
    }
}
exports.default = User;
;
function userHelper() {
    console.log('User helper');
}
exports.userHelper = userHelper;
