//your code here!
document.addEventListener("DOMContentLoaded", function () {
    // Initial list items
    const initialListItems = 10;

    // Get the list element by its ID
    const list = document.getElementById("myList");

    // Function to add a new list item
    function addListItem() {
        const listItem = document.createElement("li");
        listItem.textContent = "List Item";
        list.appendChild(listItem);
    }

    // Add initial list items
    for (let i = 0; i < initialListItems; i++) {
        addListItem();
    }

    // Function to check if the user has reached the end of the list
    function isEndOfList() {
        const lastItem = list.lastElementChild;
        const lastItemRect = lastItem.getBoundingClientRect();
        return lastItemRect.bottom <= window.innerHeight;
    }

    // Function to load more items when the user reaches the end of the list
    function loadMoreItems() {
        if (isEndOfList()) {
            // Add 2 more list items
            for (let i = 0; i < 2; i++) {
                addListItem();
            }
        }
    }

    // Add a scroll event listener to load more items
    window.addEventListener("scroll", loadMoreItems);
});

