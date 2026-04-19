// Wait until the webpage is fully loaded before running the code
document.addEventListener("DOMContentLoaded", function () {

    // Get the form and reset button from the HTML
    const form = document.getElementById("quizForm");
    const resetBtn = document.getElementById("resetBtn");

    // Run this when the user submits the quiz
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page from refreshing

        let score = 0; // Track correct answers
        let total = 5; // Total number of questions

        // Get user answers
        let q1 = document.getElementById("q1").value.toLowerCase(); // text input
        let q2 = document.querySelector('input[name="q2"]:checked'); // radio
        let q3 = document.querySelector('input[name="q3"]:checked'); // radio
        let q4 = document.querySelector('input[name="q4"]:checked'); // radio
        let q5 = document.querySelectorAll('input[name="q5"]:checked'); // checkboxes

        // Make sure all questions are answered
        if (!q1 || !q2 || !q3 || !q4 || q5.length === 0) {
            document.getElementById("result").innerHTML =
                "<h3 style='color:red;'>Please answer all questions!</h3>";
            return; // Stop the function if not complete
        }

        // Check answers and increase score if correct

        // Q1 (text answer)
        if (q1.includes("web") && q1.includes("interactive")) score++;

        // Q2 (correct answer: HTML)
        if (q2.value === "HTML") score++;

        // Q3 (correct answer: //)
        if (q3.value === "//") score++;

        // Q4 (correct answer: both)
        if (q4.value === "both") score++;

        // Q5 (must select ONLY React and Angular)
        let answers = Array.from(q5).map(el => el.value);
        if (
            answers.length === 2 &&
            answers.includes("React") &&
            answers.includes("Angular")
        ) {
            score++;
        }

        // Give feedback based on score
        let feedback = "";
        if (score === 5) {
            feedback = "Excellent! 🎉";
        } else if (score >= 3) {
            feedback = "Good job 👍";
        } else {
            feedback = "Keep practicing 💪";
        }

        // Show pass or fail badge
        let badge = "";
        if (score >= 3) {
            badge = `<div class="badge pass">PASS 🎉</div>`;
        } else {
            badge = `<div class="badge fail">FAIL ❌</div>`;
        }

        // Calculate percentage score
        let percentage = (score / total * 100).toFixed(0);

        // Display results on the page
        document.getElementById("result").innerHTML =
            `<h2>You got ${score} out of ${total}</h2>
             <p>${feedback}</p>
             <p>Score: ${percentage}%</p>
             ${badge}`;
    });

    // Reset button clears form and results
    resetBtn.addEventListener("click", function () {
        form.reset(); // Clear all inputs
        document.getElementById("result").innerHTML = ""; // Clear result text
    });

});
