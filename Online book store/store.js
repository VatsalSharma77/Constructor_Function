function createAuthor(name, birthYear, nationality){
    this.name = name ;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function createBook(title, author, genre, price){
    this.title = title ;
    this.author = author;
    this.genre = genre;
    this.price =price;
    this.getBookInfo = function(){
        console.log("Book's Title - ",this.title);
        console.log("Author's name - ",this.author.name);
        console.log("Book's genre - ",this.genre);
        console.log("Book's price - ",this.price);
    }
}
let author1 = new createAuthor("Vatsal",2001,"Indian");
let author2 = new createAuthor("Jiraya",1980,"Japanese");
let author3 = new createAuthor("Warner",2001,"American");

let book1 = new createBook("Let's do Workout",author1,"Motivational",1000);
let book2 = new createBook("Ninja Way",author2,"Action",2000);
let book3 = new createBook("World inside Earth",author3,"Mystry",2280);
// console.log(book1);
book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();

let arr = [book1,book2,book3];
console.log(arr);