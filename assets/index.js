function doMath() {
    var people = document.getElementById('people').value;
    var hours = document.getElementById('hours').value;

    var grandTotal = parseInt(people) * parseInt(hours) * 7 + 125;  
    document.getElementById("value").innerHTML = grandTotal;
}