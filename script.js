let books = [
  {
    title : 'The Tragedy of Hamlet',
      author : 'William Shakespeare',
    image: "https://images.penguinrandomhouse.com/cover/9780553808049",
  },
  {
    title : 'Romeo and Juliet',
    author : 'William Shakespeare',
    image: "https://images.penguinrandomhouse.com/cover/9780553808049",
  },
  {
    title : 'A Midsummer  ',
    author : 'William',
    image: "https://images.penguinrandomhouse.com/cover/9780553808049",
  },
  {
    title : 'Harry Potter',
    author : 'Joanne Rowling',
    image: "https://images.penguinrandomhouse.com/cover/9780553808049",
  },
  {
    title: "Jabir bin Hayyan",
    author: "jon",
    image: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
  },
  {
    title : 'In My Heart A',
    author : 'Khawla Hamdi',
    image: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
  },
  {
    title: "Ibn Sina",
    author: "osama",
    image: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
  },
  {
    title : 'The Tragedy',
    author : 'William Shakespeare',
    image: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
  },
  {
    title : 'Romeo and Juliet',
    author : 'William Shakespeare',
 image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxwTNeICJuZwzc-LZN7cPuDqmTqQzedT08sA&usqp=CAU",
  },
  {
    title : 'Harry Potter',
    author : 'Joanne Rowling',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxwTNeICJuZwzc-LZN7cPuDqmTqQzedT08sA&usqp=CAU",
  },
];

let arrayDivid = Math.ceil(books / 4);
(function creatBooks() {
  let containerChildren = document.getElementById("container").children;
  let x = 0;
  for (let i = 0; i < books.length; i++) {
  
    let shelf = containerChildren[x];
    if (shelf.children.length >= 4) {
      x++;
      shelf = containerChildren[x];
    }
    (containerOfBooks = document.createElement("div")),
      (description = document.createElement("div")),
      (a = document.createElement("a")),
      (images = document.createElement("img")),
      (title = document.createElement("h4")),
      (author = document.createElement("h6"));

    images.src = books[i].image;
    shelf.appendChild(containerOfBooks);

    containerOfBooks.className = "containerOfBooksStyle";
    images.className = "imagesStyle";
    description.className = "descriptionStyle";
    author.className = "authorStyle";
    title.className = "titleStyle";

    containerOfBooks.appendChild(a);
    a.appendChild(images);
    a.setAttribute("href", "#");

    containerOfBooks.appendChild(description);

    description.appendChild(title);
    description.appendChild(author);

    let titleName = document.createTextNode(books[i].title);
    title.appendChild(titleName);

    let authorName = document.createTextNode(books[i].author);
    author.appendChild(authorName);
  }
})();
function uploadData() {
  var valueA = document.getElementById("titleOfTheBook").value,
    valueB = document.getElementById("authorOfTheBook").value,
    valueC = document.getElementById("linkOfTheBook").value;
  books.push({ title: valueA, author: valueB, image: valueC });
  let container = document.getElementById("container");
  let containerChildren = container.children;
  let shelf = containerChildren[containerChildren.length - 1];
  if (shelf.children.length >= 4) {
    shelf = document.createElement("div");
    shelf.setAttribute("id", "shelf");
    container.appendChild(shelf);
  }
  (containerOfBooks = document.createElement("div")),
    (description = document.createElement("div")),
    (a = document.createElement("a")),
    (images = document.createElement("img")),
    (title = document.createElement("h4")),
    (author = document.createElement("h6"));

  images.src = books[books.length - 1].image;
  shelf.appendChild(containerOfBooks);

  containerOfBooks.className = "containerOfBooksStyle";
  images.className = "imagesStyle";
  description.className = "descriptionStyle";
  author.className = "authorStyle";
  title.className = "titleStyle";

  containerOfBooks.appendChild(a);
  a.appendChild(images);
  a.setAttribute("href", "#");
  containerOfBooks.appendChild(description);

  description.appendChild(title);
  description.appendChild(author);

  let titleName = document.createTextNode(books[books.length - 1].title);
  title.appendChild(titleName);

  let authorName = document.createTextNode(books[books.length - 1].author);
  author.appendChild(authorName);
  return valueA;
}
