document.addEventListener('DOMContentLoaded', function () {
    // Select relevant HTML elements
    const filterButtons = document.querySelectorAll("#filter-buttons button");
    const filterableCards = document.querySelectorAll("#filterable-cards .card");

    // Function to filter cards based on filter buttons
    const filterCards = (e) => {
        document.querySelector("#filter-buttons .active").classList.remove("active");
        e.target.classList.add("active");

        filterableCards.forEach(card => {
            // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
            if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
                return card.classList.replace("hide", "show");
            }
            card.classList.add("hide");
        });
    }

    filterButtons.forEach(button => button.addEventListener("click", filterCards));

    // Function to sort the images in alphabetical order
    function sortImagesAlphabetically() {
        const cardsContainer = document.getElementById('filterable-cards');
        const cards = Array.from(cardsContainer.getElementsByClassName('card'));

        cards.sort((a, b) => {
            const titleA = a.querySelector('.card-title').textContent.toLowerCase();
            const titleB = b.querySelector('.card-title').textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        });

        // Clear the container
        cardsContainer.innerHTML = '';

        // Append the sorted cards back to the container
        for (const card of cards) {
            cardsContainer.appendChild(card);
        }
    }

    // Add a click event listener to the sort button
    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', sortImagesAlphabetically);

    // Initial sorting
    sortImagesAlphabetically();
});
