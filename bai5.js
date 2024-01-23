// Khai báo mảng chứa họ tên của người dùng
var names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

// Lấy danh sách ul từ HTML
var ul = document.getElementById("nameList");

// Duyệt qua mảng names và in tên vào danh sách trên màn hình
names.forEach(function(name) {
  var li = document.createElement("li"); // Tạo phần tử li
  li.appendChild(document.createTextNode(name)); // Thêm nội dung vào phần tử li
  ul.appendChild(li); // Thêm phần tử li vào danh sách ul
});
