$(document).ready(function(){
    console.log("reading document")
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
    
        console.log(id)
        // Send the PUT request.
        $.ajax("/api/burguers/" + id, {
          type: "PUT",
          data: {id: id}
        }).then(function() {
            console.log("eaten burguer");
            // Reload the page to get the updated list
            window.location.href = "/"
          }
        )
    });
    
    $(".new").on("click", function(event) {
        event.preventDefault();
        var name = $("#newBurguer").val();
        console.log(name);
    
        $.ajax("/api/burguers",{
            type: "POST",
            data: {name: name}
            }).then(function(){
                console.log("new burguer added!");
                window.location.href = "/"
            });
    })
});


