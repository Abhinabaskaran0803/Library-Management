// Selecting popup box, popup overlay, and button
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var popupButton = document.getElementById("add-popup");

popupButton.addEventListener("click", function() {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

// Select container, add-book, book-title-input, book-author-input, book-description-input, cancel, and delete
var container = document.querySelector(".container");
var addBookButton = document.getElementById("add-book");
var bookTitleInput = document.getElementById("book-title-input");
var bookAuthorInput = document.getElementById("book-author-input");
var bookDescriptionInput = document.getElementById("book-description-input");
var cancelPopupButton = document.getElementById("cancel-popup");

document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${bookTitleInput.value}</h2>
                     <h3>${bookAuthorInput.value}</h3>
                     <p>${bookDescriptionInput.value}</p>
                     <button onclick="deleteBook(event)">Delete</button>`;
                     
    container.append(div);

    // Hide the popup
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

cancelPopupButton.addEventListener("click", function(event) {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

function deleteBook(event) {
    event.target.parentElement.remove();
}
