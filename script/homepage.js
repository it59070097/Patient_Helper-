count = 0;
function addtimelist() {
  let content = "";
  let time = document.getElementById("addtime").value;
  if (time != "") {
    allContent = document.getElementById("addTimeContent").innerHTML;
    content =
      '<div class="input-group mb-3" id="showtimeContent' +
      count + '">' +
      '<input type="text" class="form-control" placeholder="' + time + '" id="showtime' +
      count +
      '" disabled>' +
      '<div class="input-group-append">' +
      '<button class="btn btn-outline-secondary" type="button" style="width: 90%;"onclick="deltime('+"'"+"showtimeContent"+count+"'"+')"><i class="fa fa-plus" color="#000"></i></button>' +
      "</div>" +
      "</div>";
    allContent = allContent.concat(content);
    document.getElementById("addTimeContent").innerHTML = allContent;
    count++;
    document.getElementById("addtime").reset
  }
}

function deltime(showtimeContent){
    var elem = document.getElementById(showtimeContent);
  elem.parentNode.removeChild(elem);
}
