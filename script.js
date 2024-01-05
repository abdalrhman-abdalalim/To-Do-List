const inputText=document.getElementById("inpu");

function addTask(){
    if(inputText.value==''){
        alert("please enter valid task");
    }
    else {
        let li=document.createElement("li");
        const L=document.getElementById("list");
        L.appendChild(li);
        const a=document.createElement("i");
        a.className="fa-solid fa-x";
        const x=document.createElement("img");
        x.src="download.png";
        li.appendChild(x);
        li.appendChild(document.createTextNode(inputText.value));
        li.appendChild(a);
        L.appendChild(li);

        a.addEventListener('click', function() {
            li.remove(); // Remove the list item
          });
    
          x.addEventListener('click', function() {
            if(li.classList.contains("checked")){
                li.classList.remove('checked');
                x.src='download.png';
            }
            else{
            li.classList.add('checked'); // Add a class to the list item
            x.src = 'sticker-png-check-mark-icon-share-icon-checkbox-user-interface-checklist-line-logo-symbol.png'; // Change the image source
            }
          });
    }
    inputText.value="";
    saveData();
}


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}


// function addTask() {
//     // Get input value
//     var inputValue = document.getElementById('inpu').value;

//     if (inputValue.trim() !== '') {
//       // Create list item
//       var listItem = document.createElement('li');

//       // Create close (x) logo
//       var closeLogo = document.createElement('i');
//       closeLogo.classList.add('fa-solid fa-x');

//       // Create image
//       var image = document.createElement('img');
//       image.src = 'download.png'; // Set a default image source

//       // Append close (x) logo and image to list item
//       listItem.appendChild(closeLogo);
//       listItem.appendChild(image);

//       // Set text content
//       listItem.appendChild(document.createTextNode(inputValue.value));

//       // Append list item to the unordered list
//       document.getElementById('list').appendChild(listItem);

//       // Add click event listeners
//       closeLogo.addEventListener('click', function() {
//         listItem.remove(); // Remove the list item
//       });

//       image.addEventListener('click', function() {
//         listItem.classList.add('checked'); // Add a class to the list item
//         image.src = 'sticker-png-check-mark-icon-share-icon-checkbox-user-interface-checklist-line-logo-symbol.png'; // Change the image source
//       });

//       // Clear the input field
//       document.getElementById('textInput').value = '';
//     }
//   }