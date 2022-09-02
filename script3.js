// 3.   Create an Author class and a Book class.
//    Author should have: name, email, gender. 
//    It should have getters.
//    It should have a toString method. 
//    Book should have: title, author(Author), price, quantity.
//    It should have appropriate getters and setters. 
//    It should have a method: getProfit(), which calculates the profit from the book based 
//    on the price and quantity. 
//    It should have a toString method. 


// class Author {
//     constructor(name,email,gender) {
//         this.name = name
//         this.email = email
//         this.gender = gender
//     }

//     get toString() {
//         return this.name + " " + this.email + " " + this.gender
//     }

//     get name() {
//         return this._name
//     }

//     set name(v) {
//         if(typeof v !== "string") {
//             throw "Name is not a String, Please write text."
//         }
//         this._name = v
//     }
// }

// let author = new Author("Hrach","hrachbrutyan481@gmai.com","Male")

// console.log(author)


// class Book {
//     constructor(bookName,authorBook,price,quantity) {
//         this.bookName = bookName
//         this.authorBook = authorBook
//         this.price = price
//         this.quantity = quantity
//     }

//     get toString() {
//         return this.authorBook + " " + this.authorBook + " " + this.price + " " + this.quantity
//     }

//     get getProfit() {
//         return this.price * this.quantity
//     }
// }

// let book = new Book("Well and pendulum","Stephen Edwin King", 100, 1228)

// console.log(book)