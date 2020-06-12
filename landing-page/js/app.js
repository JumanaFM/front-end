/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar= document.getElementById("navbar__list");
const sections= document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createList(){
    const list_elements=[];

    for (let index = 0; index < sections.length; index++) {
        let list_element ={};
        list_element.text=sections[index].dataset.nav;
        list_element.id=sections[index].id;
        list_elements.push(list_element);
    }
    return list_elements;
    console.log("createList()");
    console.log(list_elements);
    
    
}

function createNavElements(list_elements){
    let elements=[];
    for (let index = 0; index < list_elements.length; index++) {
        let link = document.createElement("a");
        let li = document.createElement("li");
        link.setAttribute("href", "#"+list_elements[index].id);
        link.innerHTML = list_elements[index].text;
        li.append(link);
        elements.push(li);
    }
      return elements;
      console.log("creatNavElements()");
      console.log(elements);
      
        
    }


/**
 * End Helper Functions
 


 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    let nav_elements = createNavElements(createList());
    createActiveEventListeners(nav_elements);
    navbar.append(... nav_elements);
    console.log("buildNav()");
    console.log(nav_elements);
    
    
    
}


// Add class 'active' to section when near top of viewport
function createActiveEventListeners(nav_elements){
    console.log("inside createActiveEventlisteners");
    console.log(sections.length)
    
for (let index = 0; index < nav_elements.length; index++) {
    console.log("in the loop");
    nav_elements[index].addEventListener("click", function(){  
        sections.forEach(function(section) {
            section.removeAttribute("class");
          })

        sections[index].setAttribute("class","active-class")
        console.log("in the event: " + index);
        
        
       });
    } 
    
}



// Scroll to anchor ID using scrollTO event



buildNav();

/**
 * End Main Functions
 



 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

