document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("quizForm");
    const resetBtn = document.getElementById("resetBtn");

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let score = 0;
        let total = 5;

        // Get answers
        let q1 = document.getElementById("q1").value.toLowerCase();
        let q2 = document.querySelector('input[name="q2"]:checked');
        let q3 = document.querySelector('input[name="q3"]:checked');
        let q4 = document.querySelector('input[name="q4"]:checked');
        let q5 = document.querySelectorAll('input[name="q5"]:checked');

        // Validate all questions answered
        if (!q1 || !q2 || !q3 || !q4 || q5.length === 0) {
            document.getElementById("result").innerHTML =
                "<h3 style='color:red;'>Please answer all questions!</h3>";
            return;
        }

        // Q1 (text)
        if (q1.includes("web") && q1.includes("interactive")) score++;

        // Q2
        if (q2.value === "HTML") score++;

        // Q3
        if (q3.value === "//") score++;

        // Q4
        if (q4.value === "both") score++;

        // Q5 (checkbox)
        let answers = Array.from(q5).map(el => el.value);
        if (
            answers.length === 2 &&
            answers.includes("React") &&
            answers.includes("Angular")
        ) {
            score++;
        }

        // Feedback message
        let feedback = "";
        if (score === 5) {
            feedback = "Excellent! 🎉";
        } else if (score >= 3) {
            feedback = "Good job 👍";
        } else {
            feedback = "Keep practicing 💪";
        }

        // Pass / Fail badge
        let badge = "";
        if (score >= 3) {
            badge = `<div class="badge pass">PASS 🎉</div>`;
        } else {
            badge = `<div class="badge fail">FAIL ❌</div>`;
        }

        // Percentage
        let percentage = (score / total * 100).toFixed(0);

        // Display result
        document.getElementById("result").innerHTML =
            `<h2>You got ${score} out of ${total}</h2>
             <p>${feedback}</p>
             <p>Score: ${percentage}%</p>
             ${badge}`;
    });

    // Reset button
    resetBtn.addEventListener("click", function () {
        form.reset();
        document.getElementById("result").innerHTML = "";
    });

});
