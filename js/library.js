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

    modalReadButton = document.createElement("button")
    modalReadButton.textContent = "Read"
    //modalDeleteButton 
    modalDeleteButton = document.createElement("button")
    modalDeleteButton.textContent = "Delete"

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
    newList.appendChild(modalReadButton)
    newList.appendChild(modalDeleteButton)
   /* modalDeleteButton = newButton
    modalDeleteButton.textContent = "Delete"
    newList.appendChild(modalDeleteButton) */

    newDiv.appendChild(newList)
    
    bookLayoutDiv.appendChild(newDiv)


    //bookLayoutDiv.appendChild(newDiv.appendChild(newList.appendChild(newListItem.appendChild(newHeader))))
    //document.appendChild(bookLayoutDiv)
}

// Delete Entry
const deleteBookButton = document.querySelector("#delete-book")
deleteBookButton.addEventListener("click", (e) => {
    let activeBook = document.querySelector(`#${e.target.parentNode.parentNode.id}`)
    activeBook.remove()
});

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


function toggleModal() {
    popUpContainer.classList.toggle("show-pop-up-container");
}

// This closes window and works
function windowOnClick(event) {
    if (event.target === popUpContainer) {
        toggleModal();
    }
}
window.addEventListener("click", windowOnClick); 
addButton.addEventListener("click", toggleModal);


//

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