// Javascript code for aboutme.html

// wrote it with a little guidance from ChatGPT. 
// It is my code/work though

// grab child elements stored within the divs
const paragraphs = document.getElementById("content").children;
const links = document.getElementById("links").children;

// function executed by event listener when clicked
function showParagraph(){

    // grabs the 'href' value of the clicked link and removes the '#' from it
    let clickedId = this.getAttribute('href').substring(1);

    // iterate through the children of the content div
    for(let j = 0; j < paragraphs.length; j++) {

        // store each child in a variable
        let paragraph = paragraphs[j];

        // if the paragraph's id matches the id of the clicked link's href value
        if(paragraph.id == clickedId){
            
            // remove the hidden class from the paragraph element
            paragraph.classList.remove('hidden');
        } 
        else {
            // add the hidden class to the paragraph element
            paragraph.classList.add('hidden');
        }
    }
}


// iterate through each child of the links div and an add event listener
for (let i = 0; i < links.length; i++) {

    // store each child in a variable
    let link = links[i];

    // add event listener to child
    link.addEventListener("click", showParagraph);
}
