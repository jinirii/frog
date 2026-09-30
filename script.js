const frog = document.querySelector(".frog");
const lilyPads = document.querySelectorAll(".lily");

let frogPosition = 0;

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight" && frogPosition === 0) {
        frogPosition = 1;
    } //=== check && and

    else if (event.key === "ArrowLeft" && frogPosition === 1) {
        frogPosition = 0;
    }

    else if (event.key === "ArrowDown" && frogPosition === 0) {
        frogPosition = 2;
    }

    else if (event.key === "ArrowUp" && frogPosition === 2) {
        frogPosition = 0;
    }

    else if (event.key === "ArrowDown" && frogPosition === 1) {
        frogPosition = 3;
    }

    else if (event.key === "ArrowUp" && frogPosition === 3) {
        frogPosition = 1;
    }

    else if (event.key === "ArrowLeft" && frogPosition === 3) {
        frogPosition = 2;
    }

    else if (event.key === "ArrowRight" && frogPosition === 2) {
        frogPosition = 3;
    }


    lilyPads[frogPosition].appendChild(frog);
});
