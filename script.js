const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");

colorInput.addEventListener("input", function (event) {
  const selectedColor = event.target.value;

  // Tampilkan kode warna
  colorCode.textContent = selectedColor;

  // Ubah background seluruh <body>
  document.body.style.backgroundColor = selectedColor;
});
