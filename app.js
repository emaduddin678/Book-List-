// 1. DOM SELECTION
// 2. Event Listener
// 3. Basic VAlidation
// 4. Create Elements
// 5. Append Elements

const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const btn = document.getElementsByClassName("btn")[0];

const booklist = document.getElementById("book-list");
let i = 1;

btn.addEventListener("click", (e) => {
    e.preventDefault();

  if (title.value === "") {
    alert("Enter Book Name for BookList");
  } else if (author.value === "") {
    alert("Enter Author Name of our book");
  } else if (year.value === "" || isNaN(year.value)) {
    alert("Enter Publish year of your book");
  } else {
    const newRow = document.createElement("tr");

    const serialNum = document.createElement('th');
    
    serialNum.innerText = i;
    newRow.appendChild(serialNum);

    const newTitle = document.createElement('th');
    newTitle.innerText = title.value;
    newRow.appendChild(newTitle);
    console.log(newRow);
    
    const newAuthor = document.createElement('th');
    newAuthor.innerText = author.value;
    newRow.appendChild(newAuthor);
    // console.log(newRow);
    
    const newYear = document.createElement('th');
    newYear.innerText = year.value;
    newRow.appendChild(newYear);
    // console.log(newRow);



    booklist.appendChild(newRow);
    i++;
  }
});
