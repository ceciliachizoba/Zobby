
window.addEventListener("DOMContentLoaded", () => {
    const inputs = document.getElementsByClassName("input");
    const buttons = document.getElementsByClassName("button");
    const responses = document.getElementsByClassName("response");
    const chancesSpan = document.querySelector("span");
    let chancesNum = 5;
    chancesSpan.innerHTML = chancesNum;
    const num = 5;
    // Disable all buttons initially
    Array.from(buttons).forEach(button => {
        button.style.opacity = "0.5";
        button.disabled = true;
    });
    // Add event listener to each input
    Array.from(inputs).forEach(input => {
        input.addEventListener("keyup", () => {
            let length = input.value.length;
            if (length > 0 && length < 4 && input.value <= 100) {
                Array.from(buttons).forEach(button => {
                    button.style.opacity = "1";
                    button.disabled = false;
                });
            } else {
                Array.from(buttons).forEach(button => {
                    button.disabled = true;
                    button.style.opacity = "0.5";
                });
            }
        });
    });
    // Add event listener to each button
    Array.from(buttons).forEach(button => {
        button.addEventListener("click", () => {
            const input = button.previousElementSibling; // Assuming the input is the previous sibling of the button
            if (input.value < num) {
                responses[0].innerHTML = "Your Number is Low";
            } else if (input.value > num) {
                responses[0].innerHTML = "Your Number is too High";
            } else {
                responses[0].innerHTML = "You are correct";
            }
            chancesNum--;
            chancesSpan.innerHTML = chancesNum;
            if (chancesNum <= 0) {
                Array.from(buttons).forEach(button => {
                    button.disabled = true;
                    button.style.opacity = "0.5";
                });
                Array.from(inputs).forEach(input => {
                    input.disabled = true;
                });
                alert("You Have Exhausted Your Chances!!!");
            }
        });
    });
});