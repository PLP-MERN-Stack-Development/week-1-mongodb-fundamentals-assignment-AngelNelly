const {MongoClient} = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run () {
  try{
    await client.connect();
    const db = client.db("PLP_Bookstore");
    const books = db.collection("books");

    await books.insertMany([
      {
       title: "To Kill a Mockingbird",
       author: "Harper Lee",
       genre: "Fiction",
       published_year: 1960,
       price: 19.99,
       in_stock: true,
       pages: 281,
       publisher: "J.N. Lippincott $ Co.",
      },

     {
       title: "Dune",
       author: "Frank Herbert",
       genre: "Science Fiction",
       published_year: 1965,
       price: 12.55,
       in_stock: true,
       pages: 281,
       publisher: "Chilton Books",
  },
  

  {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      published_year: 1937,
      price: 20.00,
      in_stock: true,
      pages: 310,
      publisher: "George Allen Unwin",
  },
  

  {
    title: "Pride And Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 15.99,
    in_stock: true,
    pages: 432,
    publisher: "T. Egerton",
  },

  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 16.99,
    in_stock: true,
    pages: 277,
    publisher: "Little Brown and Company",
  },

  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    published_year: "2005 (Sweden) / 2008 (US)",
    price: 20.99,
    in_stock: true,
    pages: 465,
    publisher: "Norstedts Forlag (Sweden) /knopf (US)",
  },
  
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: "2011 (Hebrew) / 2014 (English)",
    price: 10.55,
    in_stock: true,
    pages: 443,
    publisher: "Harvill Secker (UK) / Harper (US)",
  },
  

  {
    title: "The Alchemist",
    author: "Paul Coelho",
    genre: "Inspirational",
    published_year: "1988 (Portuguese)/ 1993 (English)",
    price: 15.00,
    in_stock: true,
    pages: 208,
    publisher: "HarperTorch (US)",
  },

  {
    title: "Beloved",
    author: "Toni Morrison",
    genre: "Historical Fiction",
    published_year: 1987,
    price: 20.00,
    in_stock: true,
    pages: 324,
    publisher: "Alfred A. Knopf",
  },
  
  
  {
    title: "The Name of The Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    published_year: 2007,
    price: 15.00,
    in_stock: true,
    pages: 662,
    publisher: "DAW Books",
  },
  
    ]);
    console.log("Books successfully inserted!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);