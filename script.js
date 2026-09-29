// =====================================================
// BOYFRIEND'S DAY WEBSITE — FINAL SCRIPT
// =====================================================


// =====================================================
// SLIDES
// =====================================================

const openingScreen =
    document.querySelector(".opening-screen");

const envelope =
    document.getElementById("envelope");

const openButton =
    document.getElementById("openButton");

const slide2 =
    document.getElementById("slide2");

const slide3 =
    document.getElementById("slide3");

const slide4 =
    document.getElementById("slide4");

const slide5 =
    document.getElementById("slide5");


// =====================================================
// NAVIGATION
// =====================================================

const toSlide3 =
    document.getElementById("toSlide3");

const toSlide4 =
    document.getElementById("toSlide4");

const toSlide5 =
    document.getElementById("toSlide5");


// =====================================================
// SLIDE 4 — YES / NO
// =====================================================

const dateYes =
    document.getElementById("dateYes");

const dateNo =
    document.getElementById("dateNo");

const yesMessage =
    document.getElementById("yesMessage");

const noMessage =
    document.getElementById("noMessage");

const dateButtons =
    document.querySelector(".date-buttons");

const dateQuestion =
    document.querySelector(".date-question");


// =====================================================
// YES BUTTON
// =====================================================

if (dateYes) {

    dateYes.addEventListener("click", function () {

        if (dateButtons) {
            dateButtons.style.display = "none";
        }

        if (dateQuestion) {
            dateQuestion.style.display = "none";
        }

        if (yesMessage) {
            yesMessage.style.display = "block";
        }

    });

}


// =====================================================
// NO BUTTON
// =====================================================

if (dateNo) {

    dateNo.addEventListener("click", function () {

        if (dateButtons) {
            dateButtons.style.display = "none";
        }

        if (dateQuestion) {
            dateQuestion.style.display = "none";
        }

        if (noMessage) {
            noMessage.style.display = "block";
        }

    });

}


// =====================================================
// SLIDE 5 ELEMENTS
// =====================================================

const foodMenu =
    document.getElementById("foodMenu");

const foodChoices =
    document.querySelectorAll(".vd3-food-choice");

const serveFood =
    document.getElementById("serveFood");


// GIRL FOOD

const servedPizzaGirl =
    document.getElementById("servedPizzaGirl");

const servedWineGirl =
    document.getElementById("servedWineGirl");

const servedKebabGirl =
    document.getElementById("servedKebabGirl");


// BOY FOOD

const servedPizzaBoy =
    document.getElementById("servedPizzaBoy");

const servedWineBoy =
    document.getElementById("servedWineBoy");

const servedKebabBoy =
    document.getElementById("servedKebabBoy");


// OTHER

const danceButton =
    document.getElementById("danceButton");

const dateEnd =
    document.getElementById("dateEnd");


// =====================================================
// FOOD STATE
// =====================================================

let selectedFoods = new Set();

let walkAnimationId = null;


// =====================================================
// DATE STATE
// =====================================================

function setDateState(state) {

    if (!slide5) {
        return;
    }

    [...slide5.classList].forEach(function (className) {

        if (className.startsWith("vd3-state-")) {
            slide5.classList.remove(className);
        }

    });

    slide5.classList.add("virtual-date-v3");
    slide5.classList.add("active");
    slide5.classList.add("vd3-state-" + state);

}


// =====================================================
// RESET DATE
// =====================================================

function resetDate() {

    if (!slide5) {
        return;
    }


    if (walkAnimationId !== null) {

        cancelAnimationFrame(walkAnimationId);

        walkAnimationId = null;

    }


    // Reset food selection

    selectedFoods.clear();


    foodChoices.forEach(function (button) {

        button.classList.remove("selected");

    });


    slide5.classList.remove("vd3-has-wine");
    slide5.classList.remove("vd3-food-served");


    if (serveFood) {
        serveFood.classList.remove("visible");
    }


    // Hide all food

    if (servedPizzaGirl) {
        servedPizzaGirl.style.display = "none";
    }

    if (servedPizzaBoy) {
        servedPizzaBoy.style.display = "none";
    }

    if (servedWineGirl) {
        servedWineGirl.style.display = "none";
    }

    if (servedWineBoy) {
        servedWineBoy.style.display = "none";
    }

    if (servedKebabGirl) {
        servedKebabGirl.style.display = "none";
    }

    if (servedKebabBoy) {
        servedKebabBoy.style.display = "none";
    }


    // Show food menu again

    if (foodMenu) {

        foodMenu.style.opacity = "";
        foodMenu.style.pointerEvents = "";

    }


    if (danceButton) {
        danceButton.classList.remove("visible");
    }


    if (dateEnd) {
        dateEnd.style.opacity = "0";
    }


    // Reset characters

    const girl =
        slide5.querySelector(".vd3-girl");

    const boy =
        slide5.querySelector(".vd3-boy");


    if (girl) {

        girl.style.removeProperty("left");
        girl.style.removeProperty("opacity");
        girl.style.removeProperty("transition");

    }


    if (boy) {

        boy.style.removeProperty("left");
        boy.style.removeProperty("opacity");
        boy.style.removeProperty("transition");

    }

}


// =====================================================
// START VIRTUAL DATE
// =====================================================

function startVirtualDate() {

    resetDate();

    setDateState("waiting");


    setTimeout(function () {
        setDateState("entry");
    }, 500);


    setTimeout(function () {
        setDateState("arrived");
    }, 3800);


    setTimeout(function () {
        setDateState("proposal");
    }, 4500);


    setTimeout(function () {
        setDateState("proposal-kiss");
    }, 7000);


    setTimeout(function () {
        setDateState("to-chair");
    }, 8500);


    setTimeout(function () {
        setDateState("pull-chair");
    }, 9700);


    setTimeout(function () {
        setDateState("girl-seated");
    }, 10800);


    setTimeout(function () {
        setDateState("boy-walks-to-seat");
    }, 12000);


    setTimeout(function () {
        setDateState("dining");
    }, 14000);

}


// =====================================================
// SLIDE 4 → SLIDE 5
// =====================================================

if (toSlide5) {

    toSlide5.addEventListener("click", function () {

        if (!slide5) {
            return;
        }


        slide5.classList.add(
            "virtual-date-v3",
            "active"
        );


        setTimeout(function () {

            slide5.scrollIntoView({
                behavior: "smooth"
            });

        }, 200);


        startVirtualDate();

    });

}


// =====================================================
// FOOD SELECTION
// =====================================================

foodChoices.forEach(function (button) {

    button.addEventListener("click", function () {

        const food =
            button.dataset.food;


        // =============================================
        // ALL 3
        // =============================================

        if (food === "all") {

            selectedFoods = new Set([
                "pizza",
                "wine",
                "kebab"
            ]);


            foodChoices.forEach(function (item) {

                item.classList.remove("selected");

            });


            button.classList.add("selected");


            if (slide5) {
                slide5.classList.add("vd3-has-wine");
            }


            if (serveFood) {
                serveFood.classList.add("visible");
            }


            return;
        }


        // =============================================
        // NORMAL FOOD
        // =============================================

        const allButton =
            document.querySelector(".vd3-all-food");


        if (allButton) {
            allButton.classList.remove("selected");
        }


        if (selectedFoods.has(food)) {

            selectedFoods.delete(food);

            button.classList.remove("selected");

        } else {

            selectedFoods.add(food);

            button.classList.add("selected");

        }


        // Wine styling

        if (slide5) {

            if (selectedFoods.has("wine")) {

                slide5.classList.add("vd3-has-wine");

            } else {

                slide5.classList.remove("vd3-has-wine");

            }

        }


        // Serve button

        if (serveFood) {

            if (selectedFoods.size > 0) {

                serveFood.classList.add("visible");

            } else {

                serveFood.classList.remove("visible");

            }

        }

    });

});


// =====================================================
// SERVE DINNER
// =====================================================

if (serveFood) {

    serveFood.addEventListener("click", function () {

        if (selectedFoods.size === 0) {
            return;
        }


        // =============================================
        // PIZZA — BOTH
        // =============================================

        if (servedPizzaGirl) {

            servedPizzaGirl.style.display =
                selectedFoods.has("pizza")
                    ? "block"
                    : "none";

        }


        if (servedPizzaBoy) {

            servedPizzaBoy.style.display =
                selectedFoods.has("pizza")
                    ? "block"
                    : "none";

        }


        // =============================================
        // WINE — BOTH
        // =============================================

        if (servedWineGirl) {

            servedWineGirl.style.display =
                selectedFoods.has("wine")
                    ? "block"
                    : "none";

        }


        if (servedWineBoy) {

            servedWineBoy.style.display =
                selectedFoods.has("wine")
                    ? "block"
                    : "none";

        }


        // =============================================
        // KEBAB — BOTH
        // =============================================

        if (servedKebabGirl) {

            servedKebabGirl.style.display =
                selectedFoods.has("kebab")
                    ? "block"
                    : "none";

        }


        if (servedKebabBoy) {

            servedKebabBoy.style.display =
                selectedFoods.has("kebab")
                    ? "block"
                    : "none";

        }


        // =============================================
        // HIDE MENU
        // =============================================

        if (foodMenu) {

            foodMenu.style.opacity = "0";
            foodMenu.style.pointerEvents = "none";

        }


        if (slide5) {
            slide5.classList.add("vd3-food-served");
        }


        // =============================================
        // START EATING
        // =============================================

        setDateState("eating");


        // =============================================
        // AFTER 5 SECONDS
        // =============================================

        setTimeout(function () {


            if (servedPizzaGirl) {
                servedPizzaGirl.style.display = "none";
            }

            if (servedPizzaBoy) {
                servedPizzaBoy.style.display = "none";
            }


            if (servedWineGirl) {
                servedWineGirl.style.display = "none";
            }

            if (servedWineBoy) {
                servedWineBoy.style.display = "none";
            }


            if (servedKebabGirl) {
                servedKebabGirl.style.display = "none";
            }

            if (servedKebabBoy) {
                servedKebabBoy.style.display = "none";
            }


            if (slide5) {
                slide5.classList.remove("vd3-food-served");
            }


            if (danceButton) {
                danceButton.classList.add("visible");
            }


        }, 5000);

    });

}


// =====================================================
// DANCE → TWIRL → KISS → WALK HOME
// =====================================================

if (danceButton) {

    danceButton.addEventListener("click", function () {

        danceButton.classList.remove("visible");


        // Dance

        setDateState("dance");


        // Twirl after 1 second

        setTimeout(function () {

            setDateState("twirl");

        }, 1000);


        // Kiss after twirl

        setTimeout(function () {

            setDateState("final-kiss");

        }, 3200);


        // Automatically walk home

        setTimeout(function () {

            setDateState("exit");

            startWalkHome();

        }, 6100);

    });

}


// =====================================================
// WALK HOME
// =====================================================

function startWalkHome() {

    if (!slide5) {
        return;
    }


    const girl =
        slide5.querySelector(".vd3-girl");

    const boy =
        slide5.querySelector(".vd3-boy");


    if (!girl || !boy) {
        return;
    }


    const startBoy =
        (slide5.clientWidth / 2) - 120;


    const startGirl =
        (slide5.clientWidth / 2) + 5;


    const endPosition =
        slide5.clientWidth + 220;


    const duration = 9000;


    const startTime =
        performance.now();


    function animate(now) {

        const elapsed =
            now - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const boyLeft =
            startBoy +
            (
                endPosition -
                startBoy
            ) *
            progress;


        const girlLeft =
            startGirl +
            (
                endPosition -
                startGirl
            ) *
            progress;


        boy.style.setProperty(
            "left",
            boyLeft + "px",
            "important"
        );


        girl.style.setProperty(
            "left",
            girlLeft + "px",
            "important"
        );


        // Fade out near the end

        let opacity = 1;


        if (progress > 0.88) {

            opacity =
                1 -
                (
                    (progress - 0.88) /
                    0.12
                );

        }


        boy.style.setProperty(
            "opacity",
            opacity,
            "important"
        );


        girl.style.setProperty(
            "opacity",
            opacity,
            "important"
        );


        if (progress < 1) {

            walkAnimationId =
                requestAnimationFrame(animate);

        } else {

    walkAnimationId = null;

    boy.style.setProperty(
        "opacity",
        "0",
        "important"
    );

    girl.style.setProperty(
        "opacity",
        "0",
        "important"
    );


    // Go to personal message

    const slide6 =
        document.getElementById("slide6");

    if (slide6) {

        setTimeout(function () {

            slide6.classList.add("active");

            slide6.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 700);

    }

}
    }


    walkAnimationId =
        requestAnimationFrame(animate);

}