// Mảng chứa các phần tử danh sách
var items = ["List item number 1", "List item number 2", "List item number 3"];

// Lặp qua mảng và thêm mỗi phần tử vào danh sách
var list = document.getElementById("myList");
items.forEach(function(item) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  list.appendChild(li);
});