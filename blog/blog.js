const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

function starsToLabel(stars) {
  const count = (stars.match(/⭐/g) || []).length;
  return `${count} out of 5 stars`;
}

function renderArticle(article) {
  const post = document.createElement("article");
  post.className = "post";

  const aside = document.createElement("aside");
  aside.className = "meta";
  aside.setAttribute("aria-label", "Book details");

  const date = document.createElement("p");
  date.className = "meta-item";
  date.innerHTML = `<em>${article.date}</em>`;

  const ages = document.createElement("p");
  ages.className = "meta-item";
  ages.textContent = article.ages;

  const genre = document.createElement("p");
  genre.className = "meta-item";
  genre.textContent = article.genre;

  const stars = document.createElement("p");
  stars.className = "meta-item stars";
  stars.setAttribute("aria-label", starsToLabel(article.stars));
  stars.textContent = article.stars;

  aside.append(date, ages, genre, stars);

  const section = document.createElement("section");
  section.className = "content";
  section.setAttribute("aria-label", "Book review");

  const h2 = document.createElement("h2");
  h2.className = "post-title";
  h2.textContent = article.title;

  const img = document.createElement("img");
  img.className = "book-cover";
  img.src = article.imgSrc;
  img.alt = article.imgAlt;

  const desc = document.createElement("p");
  desc.className = "description";
  desc.textContent = article.description;

  section.append(h2, img, desc);

  post.append(aside, section);
  return post;
}

function renderAll() {
  const posts = document.querySelector("#posts");
  posts.innerHTML = "";
  articles.forEach((a) => posts.appendChild(renderArticle(a)));
}

renderAll();
