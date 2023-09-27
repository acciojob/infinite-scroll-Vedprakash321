//your code here!
// myList
document.addEventListener("DOMContentLoaded", function () {
    const myList = document.getElementById("infi-list");
    const totalItems = 10; // Number of initial list items
    const itemsToAdd = 8; // Number of items to add when reaching the end

    // Function to add a list item
    function addListItem() {
        const li = document.createElement("li");
        li.textContent = `List item ${myList.children.length + 1}`;
        myList.appendChild(li);
    }

    // Add initial list items
    for (let i = 0; i < totalItems; i++) {
        addListItem();
    }

    // Event listener for scrolling to the end of the list
    myList.addEventListener("scroll", function () {
        const scrollHeight = myList.scrollHeight;
        const scrollTop = myList.scrollTop;
        const clientHeight = myList.clientHeight;

        if (scrollHeight - scrollTop === clientHeight) {
            // User has scrolled to the end, add more items
            for (let i = 0; i < itemsToAdd; i++) {
                addListItem();
            }
        }
    });
});


