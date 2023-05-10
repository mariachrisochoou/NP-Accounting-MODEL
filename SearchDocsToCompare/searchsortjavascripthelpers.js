function sortList() {
  var ul = document.getElementById("myUL");
  var li = ul.querySelectorAll("li");
  var sorted = Array.from(li).sort(function(a, b) {
    return a.textContent.localeCompare(b.textContent);
  });
  sorted.forEach(function(item) {
    ul.appendChild(item);
  });
}


function sortyear() {
// Get the list element and all list items
var list = document.getElementById("myUL");
var items = list.getElementsByTagName("li");

// Sort the list items based on the year in their text
items = Array.prototype.slice.call(items);
items.sort(function(a, b) {
  var yearA = parseInt(a.textContent.match(/\d{4}/)[0]);
  var yearB = parseInt(b.textContent.match(/\d{4}/)[0]);
  return yearA - yearB;
});

// Reorder the list items based on the sorted array
for (var i = 0; i < items.length; i++) {
  list.appendChild(items[i]);
}
}


function lastaccessrandom() {
    const ul = document.querySelector('#myUL');
    for (let i = ul.children.length; i >= 0; i--) {
       ul.appendChild(ul.children[Math.random() * i | 0]);
    }

}


function search() {
    // Get the input element, filter value, and list of items
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-holder");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
  
    // Create a variable to keep track of whether any results were found
    var found = false;
  
    // Loop through all list items
    for (i = 0; i < li.length; i++) {
      // Get the link element within the list item
      a = li[i].getElementsByTagName("a")[0];
      // Get the text content of the link element
      txtValue = a.textContent || a.innerText;
      // Check if the search query matches the text content of the link element
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        // If it does, display the list item
        li[i].style.display = "";
        // Set found to true
        found = true;
      } else {
        // If it doesn't, hide the list item
        li[i].style.display = "none"; 
      }
    }
  
    // If no results were found, show a pop-up window
    if (!found) {
      alert("The document was not found.");
    }

    

  }


function redirect() {
		// Get the selected checkboxes
		var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
			
		// Check if at least two checkboxes are selected
		if (checkboxes.length >= 2) {
			// Redirect to the new page
			window.location.href = "new_page.html";
		} else {
			alert("Choose at least two documents to compare.");
		}
}
  
