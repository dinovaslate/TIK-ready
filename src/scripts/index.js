window.ready = function ready() {
  var quantiti = document.getElementsByClassName("kuantiti");
  for (var i = 0; i < quantiti.length; i++) {
    var input = quantiti[i];
    input.addEventListener("change", window.kuantitasberubah);
  }
  
}
window.kuantitasberubah = function kuantitasberubah(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  jumlahper1();
  jumlahper2();
  jumlahper3();
  jumlahar();
}

window.jumlahper1 = function jumlahper1() {
  var hargaElemen = document
    .getElementById("harga1")
    .innerText.replace("$", "");
  var jumsp1 = document.getElementById("sepatu1").value;
  var harga = parseFloat(hargaElemen);
  var jumspt1 = harga * jumsp1;
  document.getElementById("subtotal1").innerHTML = "$" + jumspt1;
}

window.jumlahper2 = function jumlahper2() {
  var shp2 = document.getElementById("harga2").innerText.replace("$", "");
  var jumsp2 = document.getElementById("sepatu2").value;
  var jumspt2 = shp2 * jumsp2;
  document.getElementById("subtotal2").innerHTML = "$" + jumspt2;
}

window.jumlahper3 = function jumlahper3() {
  var shp3 = document.getElementById("harga3").innerHTML.replace("$", "");
  var jumsp3 = document.getElementById("sepatu3").value;
  var jumspt3 = shp3 * jumsp3;
  document.getElementById("subtotal3").innerHTML = "$" + jumspt3;
}

window.jumlahar = function jumlahar() {
  var jhar =
    parseFloat(
      document.getElementById("subtotal1").innerText.replace("$", "")
    ) +
    parseFloat(
      document.getElementById("subtotal2").innerText.replace("$", "")
    ) +
    parseFloat(document.getElementById("subtotal3").innerText.replace("$", ""));
  document.getElementById("jumlah_harga").innerHTML = "Subtotal: $" + jhar;
}
window.beli = function beli() {
  alert("Thank you for your purchase");
}

window.onload = () => {
  ready();
  jumlahper1();
  jumlahper2();
  jumlahper3();
  jumlahar();
}
