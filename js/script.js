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
  },
  {
    "name":"Elise",
    "image":"img/elise.jpg",
    "counter":0
  },
  {
    "name":"Rocket",
    "image":"img/rocket.jpg",
    "counter":0
  },
  {
    "name":"Spud",
    "image":"img/spud.jpg",
    "counter":0
  }
];

function createCatList() {
  var toAppend = "";
  $.each(cat_data, function(catIndex, cat) {
    toAppend += "<li class='cat list-group-item'>" + cat.name + "</li>";
  });
  $("#list").append("<ul class='list-group'>" + toAppend + "</ul>");
}

function displayCat(id) {
  $("#display").empty();
  cat = cat_data[id];
  var htmlStr =  "<div class='cat col-xs-12 col-sm-4 col-md-4' id='img'>";
    htmlStr += "<img src='" + cat.image + "' class='clickable img-thumbnail'/>";
    htmlStr += "<h4 class='name caption text-center'>" + cat.name + "</h4>";
    htmlStr += "<p class='count caption text-center' id='" + id.toString() + "'>" + cat.counter.toString() + "</p>";
    htmlStr += "</div>";
  $("#display").append(htmlStr);
  $(".clickable").click(function(obj) {
    var elem = obj.target.parentElement.childNodes[2];
    cat_data[elem.id].counter += 1;

    $("#" + elem.id).text(cat_data[elem.id].counter);
  });
}


$(document).ready(function() {
  createCatList();
  $(".cat").click(function(obj) {
    id = cat_data.indexOf(cat_data.filter(function(a){ return a.name == obj.target.innerHTML; })[0]);
    displayCat(id);
  });
});
