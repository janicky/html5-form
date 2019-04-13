// Add event listeners
var loading = document.getElementById("loading");
var form = document.getElementById("form");

var processing = function() {
    loading.classList.add("hidden");
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    loading.classList.remove("hidden");
    setTimeout(processing, 1000);
});

