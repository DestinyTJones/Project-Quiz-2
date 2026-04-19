document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("quizForm");
    const resetBtn = document.getElementById("resetBtn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let score = 0;
        let total = 5;

        // Q1 (text)
        let q1 = document.getElementById("q1").value.toLowerCase();
        if (q1.includes("web") || q1.includes("interactive")) score++;

        // Q2
        let q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === "HTML") score++;

        // Q3
        let q3 = document.querySelector('input[name="q3"]:checked');
        if (q3 && q3.value === "//") score++;

        // Q4
        let q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === "both") score++;

        // Q5 (checkboxes)
        let q5 = document.querySelectorAll('input[name="q5"]:checked');
        let answers = Array.from(q5).map(el => el.value);

        if (answers.includes("React") && answers.includes("Angular") && !answers.includes("HTML")) {
            score++;
        }

        // Show result
        document.getElementById("result").innerHTML =
            `<h2>You got ${score} out of ${total}</h2>`;
    });

    // Reset button
    resetBtn.addEventListener("click", function () {
        form.reset();
        document.getElementById("result").innerHTML = "";
    });

});
