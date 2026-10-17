function gradeQuiz() {
    let points = 0;

    // Question 1: Radio Buttons (Lion is option1)
    var lion = document.getElementById("king1");
    if (lion.checked) {
        points++;
        document.getElementById("question1-feedback").innerHTML = "Correct!";
    } else {
        document.getElementById("question1-feedback").innerHTML = "Incorrect!";
    }

    // Question 2: Check Boxes (Bird, Bat, Butterfly are correct)
    var bird = document.getElementById("fly1");
    var bat = document.getElementById("fly2");
    var butterfly = document.getElementById("fly3");
    var ostrich = document.getElementById("fly4");
    if (bird.checked && bat.checked && butterfly.checked) {
        points++;
        document.getElementById("question2-feedback").innerHTML = "Correct!";
    } else {
        document.getElementById("question2-feedback").innerHTML = "Incorrect!";
    }
    

    // Question 3: Radio Buttons (Sloth is option3)
    var rabbit = document.getElementById("slow1");
    var cheetah = document.getElementById("slow2");
    var sloth = document.getElementById("slow3");
    var shark = document.getElementById("slow4");
    if (sloth.checked) {
        points++;
        document.getElementById("question3-feedback").innerHTML = "Correct!";
    } else {
        document.getElementById("question3-feedback").innerHTML = "Incorrect!";
    }

    // Question 4: Check Boxes (Dolphin, Whale, Shark are correct)
    var dolphin = document.getElementById("ocean1");
    var whale = document.getElementById("ocean2");
    var shark = document.getElementById("ocean3");
    var kangaroo = document.getElementById("ocean4");
    if (dolphin.checked && whale.checked && shark.checked) {
        points++;
        document.getElementById("question4-feedback").innerHTML = "Correct!";
    } else {
        document.getElementById("question4-feedback").innerHTML = "Incorrect!";
    }
   
    document.getElementById("score").innerHTML = "Total Points: " + points + " out of 4";
}