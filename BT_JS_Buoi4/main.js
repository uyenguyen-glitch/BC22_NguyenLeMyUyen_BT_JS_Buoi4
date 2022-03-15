/**
 * Bài 1
 * Đầu vào: 3 số nguyên
 * Xử lí:
 * - So sánh số thứ nhất và số thứ hai để tìm ra số lớn nhất và số nhỏ nhất
 * - So sánh số thứ lớn nhất vừa tìm được và số thứ ba để tìm ra số lớn nhất giữa 2 số này
 * - Trong trường hợp số thứ ba bé hơn thì so sánh số thứ ba và số nhỏ nhất vừa tìm được để tìm số nhỏ nhất giữa 2 số này
 * Đầu ra: dãy số nguyên gồm ba số vừa được nhập vào và có chiều theo thứ tự tăng dần
 */
document.getElementById("btn__arrange").onclick = function () {
  var number__1 = document.getElementById("number__1").value * 1;
  var number__2 = document.getElementById("number__2").value * 1;
  var number__3 = document.getElementById("number__3").value * 1;

  var number__max;
  var number__temp;
  var number__min;

  if (number__1 <= number__2) {
    number__max = number__2;
    number__min = number__1;
  } else {
    number__max = number__1;
    number__min = number__2;
  }

  if (number__max <= number__3) {
    number__temp = number__max;
    number__max = number__3;
  } else {
    if (number__min <= number__3) {
      number__temp = number__3;
    } else {
      number__temp = number__min;
      number__min = number__3;
    }
  }

  resultL1 = "<div class= 'alert alert-success'>Dãy số tăng dần là: ";
  resultL1 += number__min + " ";
  resultL1 += number__temp + " ";
  resultL1 += number__max + " ";
  resultL1 += "</div";

  document.getElementById("footerGiaTriTangDan").innerHTML = resultL1;
};

/**
 * Bài 2
 * Đầu vào: người sử dụng máy tính
 * Xử lí:
 * - So sánh chuỗi vừa nhập để xuất ra câu trả lời phù hợp
 * Đầu ra: Xuất ra câu trả lời:
 * - Nếu là bố sẽ xuất ra câu "Con chào bố ạ!!!"
 * - Nếu là mẹ sẽ xuất ra câu "Con chào mẹ ạ!!!"
 * - Nếu là anh trai sẽ xuất ra câu "Em chào anh ạ!!!"
 * - Nếu là em gái sẽ xuất ra câu "Chào em nhé!!!"
 */

document.getElementById("btn__hi").onclick = function () {
  var person = document.getElementById("who").value;
  var resultL2;

  if (
    person === "Bố" ||
    person === "bố" ||
    person === "BỐ" ||
    person === "B" ||
    person === "b"
  ) {
    resultL2 = "<div class= 'alert alert-success'> Con chào bố ạ!!! </div>";
    document.getElementById("footerXinChao").innerHTML = resultL2;
  } else if (
    person === "Mẹ" ||
    person === "mẹ" ||
    person === "MẸ" ||
    person === "M" ||
    person === "m"
  ) {
    resultL2 = "<div class= 'alert alert-success'> Con chào mẹ ạ!!! </div>";
    document.getElementById("footerXinChao").innerHTML = resultL2;
  } else if (
    person === "Anh" ||
    person === "anh" ||
    person === "ANH" ||
    person === "A" ||
    person === "a"
  ) {
    resultL2 = "<div class= 'alert alert-success'> Con chào anh ạ!!! </div>";
    document.getElementById("footerXinChao").innerHTML = resultL2;
  } else if (
    person === "Em" ||
    person === "em" ||
    person === "EM" ||
    person === "E" ||
    person === "e"
  ) {
    resultL2 = "<div class= 'alert alert-success'> Con chào em ạ!!! </div>";
    document.getElementById("footerXinChao").innerHTML = resultL2;
  } else {
    resultL2 = "<div class= 'alert alert-success'> Xin chào!!! </div>";
    document.getElementById("footerXinChao").innerHTML = resultL2;
  }
};

/**
 * Bài 3
 * Đầu vào: 3 số nguyên
 * Xử lí:
 * - Chia dư cho 2
 * Đầu ra:
 * - Số lượng số nguyên là số chẵn
 * - Số lượng số nguyên là số lẻ
 */

document.getElementById("btn__tinh").onclick = function () {
  var numb1 = document.getElementById("numb1").value * 1;
  var numb2 = document.getElementById("numb2").value * 1;
  var numb3 = document.getElementById("numb3").value * 1;
  var countChan = 0;
  var countLe = 0;

  if (numb1 % 2 == 0) {
    countChan += 1;
  } else {
    countLe += 1;
  }

  if (numb2 % 2 == 0) {
    countChan += 1;
  } else {
    countLe += 1;
  }

  if (numb3 % 2 == 0) {
    countChan += 1;
  } else {
    countLe += 1;
  }

  var resultL3 = "<div class= 'alert alert-success'> <p> Số lượng số chẵn là: ";
  resultL3 += countChan + "</p>";
  resultL3 += " <p> Số lượng số lẻ là: ";
  resultL3 += countLe + "</p>";
  resultL3 += "</div>";

  document.getElementById("footerSoChanLe").innerHTML = resultL3;
};

/**
 * Bài 4
 * Đầu vào: 3 cạnh tam giác
 * Xử lí:
 * - So sánh độ dài dài giữa các cạnh
 * - Nếu là tam giác đều thì độ dài 3 cạnh bằng nhau
 * - Nếu là tam giác cân thì độ dài 2 cạnh bằng nhau
 * - Nếu là tam giác vuông thì bình phương cạnh dài nhất bằng tổng bình phương 2 cạnh còn lại (Pytago)
 * Đầu ra: loại tam giác
 */

document.getElementById("btn__tamgiac").onclick = function () {
  var edge1 = document.getElementById("edge1").value * 1;
  var edge2 = document.getElementById("edge2").value * 1;
  var edge3 = document.getElementById("edge3").value * 1;
  var resultL4;

  if ((edge1 == edge2) == edge3) {
    resultL4 = "<div class= 'alert alert-success'>Tam giác đều </div>";
  } else if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
    resultL4 = "<div class= 'alert alert-success'>Tam giác cân </div>";
  } else if (
    edge1 * edge1 == edge2 * edge2 + edge3 * edge3 ||
    edge2 * edge2 == edge1 * edge1 + edge3 * edge3 ||
    edge3 * edge3 == edge2 * edge2 + edge1 * edge1
  ) {
    resultL4 = "<div class= 'alert alert-success'>Tam giác vuông </div>";
  } else {
    resultL4 = "<div class= 'alert alert-success'>Tam giác thường </div>";
  }

  document.getElementById("footerTamGiac").innerHTML = resultL4;
};
