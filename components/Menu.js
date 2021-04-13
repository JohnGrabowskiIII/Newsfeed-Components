// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(items) {

  // DECLARE VARIABLES & CREATE ELEMENTS
  const menuImg = document.querySelector('img.menu-button');

  const listContainerDiv = document.createElement('div');
  const menuList = document.createElement('ul');
  // ADD CLASSLIST
  listContainerDiv.classList.add('menu');

  // EVENT TO TOGGLE MENU OPEN
  menuImg.addEventListener('click', e => {
    listContainerDiv.classList.toggle('menu--open');
  })

  // FUNCTION TO CREATE AND ADD LIST ITEMS
  items.forEach(item => {
    let liItem = document.createElement('li');
    liItem.textContent = item;
    menuList.appendChild(liItem);
  })

  // APPEND ELEMENTS AND RETURN
  listContainerDiv.appendChild(menuList);

  return listContainerDiv;
}

// GRAB HEADER DIV AND APPEND LIST
let headerDiv = document.querySelector('div.header');

headerDiv.appendChild(menuMaker(menuItems));