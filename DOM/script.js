function change() {
  // document.getElementsByTagName("h2") returns a NodeList of the <h2>
  // elements in the document, and the first is number 0:
  const header = document.getElementsByTagName("h2").item(0);

  // The firstChild of the header is a Text node:
  header.firstChild.data = "A dynamic document";

  // Now header is "A dynamic document".

  // Access the first paragraph
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "This is the first paragraph.";

  // Create a new Text node for the second paragraph
  const newText = document.createTextNode("This is the second paragraph.");

  // Create a new Element to be the second paragraph
  const newElement = document.createElement("p");

  // Put the text in the paragraph
  newElement.appendChild(newText);

  // Put the paragraph on the end of the document by appending it to
  // the body (which is the parent of para)
  para.parentNode.appendChild(newElement);
}


//create an tree in js
const root = document.createElement("html");
//create the langauage of your html
root.lang="en";
//creating the head and title
const head= document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("My Document"));
head.appendChild(title);

//create the body part
const body = document.createElement("body");
const h2 = document.createElement("h2");
h2.appendChild(document.createTextNode("Header"));

const p = document.createElement("p");
p.appendChild(document.createTextNode("Paragraph"));
//adding child element header and paragraph to the body
body.appendChild(header);
body.appendChild(paragraph)

//add child body and head to the root

root.appendChild(head);
root.appendChild(body);



const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});

const parent = document.body.querySelector(".parent");
const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
    // Only add a child if we don't already have one
  // in addition to the text node "parent"
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
})

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () =>{
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
}
)