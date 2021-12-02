const url = "https://teclead.de/recruiting/radios";
const radios = document.querySelector(".radios");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.radios.forEach((radio) => {
      const radioTag = `
      <div class="radio" data-radio="${radio.name}">
        <div class="radio-display hidden" data-target="${radio.name}">
          <i class="fas fa-minus control"></i>
          <img class="radio-image" src=${radio.image} alt="">
          <i class="fas fa-plus control"></i>
        </div>

        <div class="radio-content" data-radio="${radio.name}" >
          <p>${radio.name}</p>
          <p>${radio.frequency}</p>
        </div>
      </div>
      <hr />
        `;
      radios.insertAdjacentHTML("beforeend", radioTag);
    });
    const radioList = document.querySelectorAll(".radio-content");
    const radioClick = [];
    radioList.forEach((radio) => {
      radio.addEventListener("click", (event) => {
        hideAllRadios();
        radioClick.push(event.currentTarget.dataset.radio);
        const lastTwoClick = radioClick.slice(-2);
        console.log(lastTwoClick);
        const parent = event.currentTarget.parentNode;
        const bottom = document.querySelector(".bottom");
        const display = parent.querySelector(".radio-display");
        display.classList.remove("hidden");
        const bottomText = `
          <p>Currently Playing</p>
          <p>${parent.dataset.radio}</p>
          `;
        bottom.innerHTML = bottomText;
        if (lastTwoClick[0] === lastTwoClick[1]) {
          display.classList.toggle("hidden");
          bottom.innerHTML = '';

        }
        console.log(counter)
      });
    });
  });

// ! when a user clicks on the radio, it
// ! displays the image and the bottom section shows "currently playing"
const hideAllRadios = () => {
  const displays = radios.querySelectorAll(".radio-display");
  displays.forEach((display) => {
    display.classList.add("hidden");
  });
};
// If the user clicks radio
// Check if another radio is opened
// Close the opened radio
// if (display.className.includes("hidden")) {
//   bottom.innerHTML = "";
// } else {

// }
