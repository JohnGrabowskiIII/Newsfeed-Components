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

// IMPORT ANIMATION LIBRARY
import anime from 'animejs/lib/anime.es';

function menuMaker(items) {

  // DECLARE VARIABLES & CREATE ELEMENTS
  const menuImg = document.querySelector('img.menu-button');
  const pageBody = document.querySelector('body');
  const listContainerDiv = document.createElement('div');
  const menuList = document.createElement('ul');

  // ADD CLASSLIST
  listContainerDiv.classList.add('menu');

  // EVENT TO TOGGLE MENU OPEN AND ANIMATION
  menuImg.addEventListener('click', e => {
    e.stopPropagation();
    listContainerDiv.classList.toggle('menu--open');
    anime({
      targets: '.menu--open',
      translateX: [-350, 0],
      easing: 'linear'
    });
  })

  // EVENT TO CLOSE MENU WHEN OPEN AND A CLICK IS REGISTERED SOMEWHERE ELSE
  pageBody.addEventListener('click', e => {
    // CHECKS TO SEE IF PARENT NODE IS A CONTAINING ELEMENT OF LIST: TRUE IF NOT
    if (e.target.parentNode !== menuList && e.target.parentNode !== document.querySelector('div.header')) {
      // ANIME OBJECT IS NAMED SO IT CAN BE WORKED WITH AS A PROMISE
      const slideOut = anime({
        targets: '.menu--open',
        translateX: -350,
        easing: 'linear'
      });
      // .THEN FUNCTION FOR SLIDOUT, TOGGLES MENU--OPEN AFTER ANIMATION IS FINISHED
      const slideOutPromise = slideOut.finished.then(() => {
        listContainerDiv.classList.toggle('menu--open');
      });
    }
  })

  // FUNCTION TO CREATE AND ADD LIST ITEMS
  items.forEach(item => {
    const liItem = document.createElement('li');
    liItem.textContent = item;
    menuList.appendChild(liItem);
  })

  // APPEND ELEMENTS AND RETURN
  listContainerDiv.appendChild(menuList);

  return listContainerDiv;
}

// GRAB HEADER DIV AND APPEND LIST
const headerDiv = document.querySelector('div.header');

headerDiv.appendChild(menuMaker(menuItems));

