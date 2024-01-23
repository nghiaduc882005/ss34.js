document.getElementById("addButton").addEventListener("click", function() {
    var inputValue = document.getElementById("inputValue").value;
    if (inputValue.trim() !== "") {
      var list = document.getElementById("list");
      var listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(inputValue));
      list.appendChild(listItem);
      document.getElementById("inputValue").value = ""; // Xóa nội dung trong input sau khi thêm vào danh sách
    } else {
      alert("Vui lòng nhập giá trị hợp lệ!");
    }
  });
  