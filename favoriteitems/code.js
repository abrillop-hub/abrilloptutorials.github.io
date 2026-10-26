function itemsArray() {
var items = ["perfume", "mugs", "purses", "makeup", "boots", "dresses", "heels", "pens", "hairclips", "glitter"]; //array length = 10

var listHTML = "<ul>";

document.getElementById("items").innerHTML = listHTML;
for (var counter = 0; counter < items.length; counter++) {
    listHTML += "<ul>" + items[counter] + "</ul>";
}
listHTML += "</ul>";
document.getElementById("items").innerHTML = listHTML;

}