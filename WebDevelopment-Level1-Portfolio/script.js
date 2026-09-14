const searchInput = document.getElementById("searchinput");
const suggestionsBox = document.getElementById("searchsuggest");

const teaProducts = [
    "Green Tea",
    "Black Tea",
    "Herbal Tea"
];

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();

    suggestionsBox.innerHTML = "";

    if (searchText === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    const matchingProducts = teaProducts.filter(function (product) {
        return product.toLowerCase().includes(searchText);
    });

    if (matchingProducts.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }
    matchingProducts.forEach(function (product) {
        const suggestion = document.createElement("div");

        suggestion.className = "suggestion-item";
        suggestion.textContent = product;

        suggestion.addEventListener("click", function () {
            searchInput.value = product;
            suggestionsBox.style.display = "none";

            document.getElementById("shop").scrollIntoView({
                behavior: "smooth"
            });
        });
        suggestionsBox.appendChild(suggestion);
    });
    suggestionsBox.style.display = "block";
});
document.addEventListener("click", function (event) {
    if (!event.target.closest(".search")) {
        suggestionsBox.style.display = "none";
    }
});
