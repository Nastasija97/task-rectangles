$(document).ready(function () {
  // generating html table
  var table = $("#rectangle-table");
  for (var i = 0; i < 25; i++) {
    var row = $("<tr></tr>");
    for (var j = 0; j < 40; j++) {
      var cell = $("<td></td>");
      cell.attr("id", "cell-" + i + "-" + j);
      cell.css("background-color", "white");
      row.append(cell);
    }
    table.append(row);
  }

  // fetching rectangle points
  $.ajax({
    url: "rectangles.json",
    dataType: "json",
    success: function (data) {
      var rectangles = data.rectangles;
      // colloring the cells that belong to rectangles
      for (var i = 0; i < rectangles.length; i++) {
        var rect = rectangles[i];
        var x1 = rect.topLeft.x;
        var y1 = rect.topLeft.y;
        var x2 = rect.bottomRight.x;
        var y2 = rect.bottomRight.y;
        for (var x = x1; x <= x2; x++) {
          for (var y = y1; y <= y2; y++) {
            //fetch cell id inside rectangle and if exist collor
            var cell = $("#cell-" + y + "-" + x);
            if (cell) {
              cell.css("background-color", "#0000FF");
            }
            if(cell && (x>=10 && x<15)){
              cell.css("background-color","#FFA500")
            }
          }
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error: " + textStatus + " - " + errorThrown);
    },
  });
});
