"use strict";

/*jshint strict: global */
/*jshint esversion: 8 */

// Reference definitions to html DOM elements

const howToPlayBtn = document.getElementById('howToPlayBtn');
const howTomodal = document.getElementById('howToModal');
const closeBtn = document.getElementsByClassName('modal-close-btn')[0];

// Event Listeners

howToPlayBtn.addEventListener('click', displayModal);
closeBtn.addEventListener('click', hideModal);


// Functions

/**
 * This function will diplay the modal window 
 * once the related button is clicked
 */

function displayModal() {  
    howTomodal.style.display = "block";
}

/**
 * This function will hide the modal
 * once the hide button is clicked
 */
function hideModal() {
  howTomodal.style.display = "none";
}

/**
 * This function will hide the modal
 * once any area outside the modal
 * is clicked
 */

window.onclick = function(event) {
    if (event.target == howTomodal) {
    howTomodal.style.display = "none";
    }
}