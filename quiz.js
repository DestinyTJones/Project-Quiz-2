document.addEventListener("DOMContentLoaded", function () {

    function submitQuiz() {
        let score = 0;
        let total = 5;
        let feedback = "";

        // Q1
        let q1 = document.getElementById("q1").value.toLowerCase();
        if (q1.includes("web") || q1.includes("interactive")) {
            score++;
            feedback += "<p>Q1: ✅ Correct</p>";
        } else {
            feedback += "<p>Q1: ❌ Incorrect</p>";
        }

        // Q2
        let q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === "HTML") {
            score++;
            feedback += "<p>Q2: ✅ Correct</p>";
        } else {
            feedback += "<p>Q2: ❌ Incorrect</p>";
        }

        // Q3
        let q3 = document.querySelector('input[name="q3"]:checked');
        if (q3 && q3.value === "//") {
            score++;
            feedback += "<p>Q3: ✅ Correct</p>";
        } else {
            feedback += "<p>Q3: ❌ Incorrect</p>";
        }

        // Q4
        let q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === "both") {
            score++;
            feedback += "<p>Q4: ✅ Correct</p>";
        } else {
            feedback += "<p>Q4: ❌ Incorrect</p>";
        }

        // Q5
        let q5 = document.querySelectorAll('input[name="q5"]:checked');
        let answers = Array.from(q5).map(el => el.value);

        if (answers.includes("React") && answers.includes("Angular") && !answers.includes("HTML")) {
            score++;
            feedback += "<p>Q5: ✅ Correct</p>";
        } else {
            feedback += "<p>Q5: ❌ Incorrect</p>";
        }

        // PASS / FAIL
        let status = score >= 3 ? "PASS 🎉" : "FAIL ❌";
        let badgeClass = score >= 3 ? "pass" : "fail";

        document.getElementById("result").innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>You got ${score} out of ${total} correct</p>
            <p>${total - score} incorrect</p>
            <div>${feedback}</div>
            <div class="badge ${badgeClass}">${status}</div>
        `;
    }

    // MAKE FUNCTIONS GLOBAL
    window.submitQuiz = submitQuiz;

    window.resetQuiz = function () {
        document.getElementById("quizForm").reset();
        document.getElementById("result").innerHTML = "";
    };

});
