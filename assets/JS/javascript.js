
// alert("string")
// Initial array of movies
var subjects = ["Cooking", "Snowboarding", "Soccer", "Philosophy", "Guitar", "Books", "History", "Bicyle", "Movies", "Comedy"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {
    // alert("sadf")
    var data = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + data +
        "&api_key=0gX4VWNzgcQt8jUocK9aVd9Pz5XzSiXo&limit=10";
    console.log(data, queryURL)
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            // Creating a div to hold the movie
            var movieDiv = $("<div class='movie'>");
            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var subjectDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var subjectImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                subjectImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the animalDiv
                subjectDiv.append(p);
                subjectDiv.append(subjectImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifdump").prepend(subjectDiv);
            }

            //    $("#gifdump").prepend(movieDiv);
        });

}

// Function for displaying movie data
function renderButtons() {
    console.log("rederButtonscalled")
    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#subjectbuttons").empty();

    // Looping through the array of movies
    for (var i = 0; i < subjects.length; i++) {
        // console.log("rederButtonscalled")
        console.log(subjects[i])
        // Console.log(subjects[i])
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("subject-btn");
        // Adding a data-attribute
        a.attr("data-name", subjects[i]);
        // Providing the initial button text
        a.text(subjects[i]);
        // Adding the button to the buttons-view div
        $("#subjectbuttons").append(a);


    }
}