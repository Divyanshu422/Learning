const totalApples = 20;

const basket1Count = document.querySelector(".basket-1 span");
basket1Count.innerHTML = totalApples;

const basket2Count = document.querySelector(".basket-2 span");
basket2Count.innerHTML = 0;

// Creating the variable which is used to represent the value on the DOM -> Number of apples in the basket
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

// Selecting the arrow and adding the event Listener for the right button

const rightButton = document.querySelector(".right-arrow ");

rightButton.addEventListener("click", () => {
  if (firstBasketAppleCount > 0) {
    secondBasketAppleCount++;
    firstBasketAppleCount--;
    //* Updating the Dom value:
    basket1Count.innerHTML = firstBasketAppleCount;
    basket2Count.innerHTML = secondBasketAppleCount;
  }
});
