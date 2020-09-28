$(document).ready(function() {
    $("#address").suggestions({
        token: "1bc82af26ff809f7bd13dcb38b281fe4ede17d72",
        type: "ADDRESS",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});