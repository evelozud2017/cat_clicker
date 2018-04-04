var cat_data = [
  {
    "name":"Toby",
    "image":"img/toby.jpg",
    "counter":0
  },
  {
    "name":"Chewie",
    "image":"img/chewie.jpg",
    "counter":0
  }
];

function displayRows() {
  var htmlStr = "";
  $.each(cat_data, function(idx, cat) {
    htmlStr += "<div class='cat col-xs-12 col-sm-4 col-md-4' id='img'>";
    htmlStr += "<img src='" + cat.image + "' class='clickable img-thumbnail'/>";
    htmlStr += "<h4 class='name caption text-center'>" + cat.name + "</h4>";
    htmlStr += "<p class='count caption text-center' id='" + idx.toString() + "'>" + cat.counter.toString() + "</p>";
    htmlStr += "</div>";
  });

	$("#main").append("<div class='row'><div class='container'>" + htmlStr + "</div></div>");
}


$(document).ready(function() {
  //var counter = 0;
  displayRows();
  //$("#count").append("<p id='clicks'>" + counter.toString() + "</p>");
  $(".clickable").click(function(obj) {
    var elem = obj.target.parentElement.childNodes[2];
    cat_data[elem.id].counter += 1;

    $("#" + elem.id).text(cat_data[elem.id].counter);
  });
});
