const addButton = document.getElementById("add-book-button");
const bookSection = document.querySelector(".book-layout-section");
const popUpForm = document.querySelector(".pop-up-form")
const popUpContainer = document.querySelector(".pop-up-container")

// Grab input values
let grabTitle = document.querySelector("#add-book-name").value
let grabAuthor = document.querySelector("#add-book-author").value
let grabPages = document.querySelector("#add-book-pages").value

// Constructor
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

// Grab book from Modal and add to myLibrary array
const modalAddBook = document.querySelector("#modal-add-book")
let bookTitle = document.getElementById("add-book-name")
let bookAuthor = document.getElementById("add-book-author")
let bookPages = document.getElementById("add-book-pages")

modalAddBook.addEventListener("click", () => {
    myLibrary.push(
        new Book(bookTitle, bookAuthor, bookPages)
    );
    addToLibrary(bookTitle.value, bookAuthor.value, bookPages.value);
    bookTitle.value  = ""
    bookAuthor.value  = ""
    bookPages.value  = ""
});

/* function clearEntries () {
    alert('hey')
    bookTitle.value  = ""
    bookAuthor.value  = ""
    bookPages.value  = ""
} */

function addToLibrary (title, author, pages) {
    // create Divs of myLibrary
    let bookLayoutDiv = document.querySelector(".book-layout-section") 
    newDiv = document.createElement("div")
    newDiv.classList.add("book-cards")

    newButton = document.createElement("button")

    newList = document.createElement("ul")

    newTitle = document.createElement("h1")
    newTitle.textContent = title
    newListItem = document.createElement("li")
    
    newAuthor = document.createElement("li")
    newAuthor.textContent = author

    newPages = document.createElement("li")
    newPages.textContent = pages
    
    newList.append(newListItem.appendChild(newTitle))
    newList.appendChild(newAuthor)
    newList.appendChild(newPages)
    newList.appendChild(newButton)

    newDiv.appendChild(newList)
    
    bookLayoutDiv.appendChild(newDiv)


    //bookLayoutDiv.appendChild(newDiv.appendChild(newList.appendChild(newListItem.appendChild(newHeader))))
    //document.appendChild(bookLayoutDiv)
}




let myLibrary = [
    new Book("1984", "George Orwell", 354),
    new Book("Goosebumps", "R.L. Stine", 543)
]

myLibrary.forEach(element => console.log(element.title))

function loadBooks () {
    return myLibrary.forEach(element => element.title)
}

window.onload = () => console.log(loadBooks())


// Launch Modal
addButton.addEventListener("click", () => {
   // newEntry()
    popUpContainer.style.width = "100%"
    popUpContainer.style.height = "100%"
    popUpForm.style.display = "grid"
}
);

/* function newEntry () {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Test");

    newDiv.appendChild(newContent);
    bookSection.appendChild(newDiv);
} */ 



// Clear Entries
const clearEntriesButton = document.querySelector("#clear-entries")


function clearEntries () {

}