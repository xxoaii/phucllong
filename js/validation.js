  function validateForm() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var dinoselect = document.getElementById("dinoselect").value;
  var shop = document.getElementById("shop").value;
  var tieude = document.getElementById("tieude").value;
  var nd = document.getElementById("nd").value;

  if (name == "") {
    alert("Vui lòng nhập họ và tên của bạn");
    return false;
  }

  if (number == "") {
    alert("Vui lòng nhập số điện thoại của bạn");
    return false;
  }

  if (!/^\d{10}$/.test(number)) {
    alert("Số điện thoại không hợp lệ");
    return false;
  }


  if (shop == "") {
    alert("Vui lòng nhập cửa hàng ghé thăm");
    return false;
  }
}
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const shopInput = document.getElementById("shop");
const titleInput = document.getElementById("tieude");
const messageInput = document.getElementById("nd");

// Hàm kiểm tra xem một chuỗi có phải là số điện thoại hay không
function isPhoneNumber(value) {
  const phonePattern = /^0\d{9}$/;
  return phonePattern.test(value);
}

// Hàm kiểm tra xem một giá trị có rỗng hay không
function isEmpty(value) {
  return value.trim() === "";
}

// Hàm xử lý sự kiện khi người dùng ấn nút Submit
function handleSubmit(event) {
  event.preventDefault(); // Ngăn chặn việc gửi form đi
  
  // Kiểm tra từng trường dữ liệu
  let isValid = true;
  
  if (isEmpty(nameInput.value)) {
    nameInput.classList.add("invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("invalid");
  }
  
  if (!isPhoneNumber(numberInput.value)) {
    numberInput.classList.add("invalid");
    isValid = false;
  } else {
    numberInput.classList.remove("invalid");
  }
  
  if (isEmpty(shopInput.value)) {
    shopInput.classList.add("invalid");
    isValid = false;
  } else {
    shopInput.classList.remove("invalid");
  }
  
  if (isEmpty(titleInput.value)) {
    titleInput.classList.add("invalid");
    isValid = false;
  } else {
    titleInput.classList.remove("invalid");
  }
  
  if (isEmpty(messageInput.value)) {
    messageInput.classList.add("invalid");
    isValid = false;
  } else {
    messageInput.classList.remove("invalid");
  }
  
  // Nếu có ít nhất một trường dữ liệu không hợp lệ, hiển thị thông báo lỗi
  if (!isValid) {
    alert("Vui lòng nhập đầy đủ thông tin và đảm bảo số điện thoại là đúng định dạng.");
    return;
  }
  
  // Nếu tất cả trường dữ liệu hợp lệ, tiến hành gửi form đi
  form.submit();
}

// Gán hàm xử lý sự kiện cho nút Submit
form.addEventListener("submit", handleSubmit);

