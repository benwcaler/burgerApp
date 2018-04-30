$(document).ready(function() {
  $(".devour").on("click", function(event) {
    var name = $(this).data("name");
    $.ajax("/api/burgers", {
      type: "PUT",
      data: {burger_name : name}
    }).then(function() {
      location.reload();
    });
  });

  $(".form").on("submit", function(event) {
    event.preventDefault();
    var name = $("#b").val().trim();
    $.ajax("/api/burgers", {
      type: "POST",
      data: {burger_name : name}
    }).then(function() {
      location.reload();
    });
  });
});