// CREATE A USER OJBECT LITERAL
var userOne = {
  email: 'tony@stark.com',
  name: 'Tony',

  // Create a function in this user object
  login() {
    console.log(this.email, 'has logged in');
  },
  logout() {
    console.log(this.email, 'has logged out');
  }
};

console.log(userOne);
userOne.name = 'Steve';
console.log(userOne.name);

// Can create a property on the fly for an object
userOne.age = 25;

// Can create a function on the fly for an object
userOne.logInfo = () => {
  console.log('I am Iron Man');
};

// CREATE CLASSES
class User {
  // Create a constructor function - use to set object properties only
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  // Class Methods
  login() {
    console.log(this.email, 'has logged in');
    return this;
  }

  logout() {
    console.log(this.email, 'has logged out');
    return this;
  }

  updateScore() {
    this.score++;
    console.log(`${this.email} score is now ${this.score}`);
    return this;
  }
}

let myUser = new User('steve@rogers.com', 'Steve');
// console.log(myUser);

let myUser2 = new User('sue@storm.com', 'Sue');
// console.log(myUser2);

// myUser.login();
// myUser2.logout();

// METHOD CHAINING
// myUser.login().logout();
myUser
  .login()
  .updateScore()
  .updateScore()
  .logout();

// CLASS INHERITANCE
class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    });
  }
}

let admin = new Admin('reed@richards.com', 'Reed');

let users = [myUser, myUser2, admin];

admin.deleteUser(myUser);

console.log(users);
