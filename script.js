function convert() {
    var value = document.getElementById("value").value;
    var from_unit = document.getElementById("from-unit").value;
    var to_unit = document.getElementById("to-unit").value;
    var result = document.getElementById("result");

    if (from_unit == "m" && to_unit == "ft") {
        result.value = value * 3.281;
    } else if (from_unit == "ft" && to_unit == "m") {
        result.value = value / 3.281;
    } else if (from_unit == "in" && to_unit == "m") {
        result.value = value / 39.37;
    } else if (from_unit == "m" && to_unit == "in") {
        result.value = value * 39.37;
    } else if (from_unit == "in" && to_unit == "ft") {
        result.value = value / 12;
    } else if (from_unit == "ft" && to_unit == "in") {
        result.value = value * 12;
    } else {
        result.value = "Invalid input";
    }
}
