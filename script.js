// script.js

// Define the clickedbutton function
function clickedbutton() {
    // Get the message container element
    const messageContainer = document.getElementById('messageContainer');

    // Set the text inside the message container
    messageContainer.textContent = "this is because he makes me laugh, is kind, makes me feel loved and is too easy to miss when he's not around ";
}

function showImage() {
  // Get the image element using the correct ID
  const image = document.getElementById('surpriseImage'); 
  // Make the image visible
  image.style.display = 'block';
  image.classList.add('image-animation'); 
}

function showReasons(){
    const reasons = document.getElementById('reasons');
    reasons.innerHTML="1. a future together <br> 2. sharing a dog <br> 3. many more drives listening to the playlist <br> 4. walking around main streets around the world window shopping and asking to get sweet treats <br> 5. traveling to new places where i can enjoy going to museums because i am with you! <br> 6. making you come to the beach with me forever <br> 7. learning new skills from you and with you <br> 8. laying with you anywhere and everywhere <br> 9. having one firm and one flat pillow but using your shoulder instead <br> 10. growing together "
}