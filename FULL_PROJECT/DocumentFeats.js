function validate() {
    var box1 = document.getElementById('check1').checked;
    var box2 = document.getElementById('check2').checked;
    var box3 = document.getElementById('check3').checked;
    var box4 = document.getElementById('check4').checked;
    checkbox = box1 || box2 || box3 || box4;
    return checkbox;
}
function exportD() {
    if (!validate()) {
        alert("Please choose one or more documents");
    } else {
        prompt("Please type your preffered representation type:", "PDF/Word/Excel/CSV/TXT");
        prompt("Please type your preffered export method:", "mail/print");
        alert("Your document(s) is/are being decompressed...");
    }
}
function accessD() {
    if (!validate()) {
        alert("Please choose one or more documents");
    } else {
        prompt("Please type your preffered representation type:", "PDF/Word/Excel/CSV/TXT");
        alert("Your document(s) is/are being decompressed...");
    }
}