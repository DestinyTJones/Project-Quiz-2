function submitQuiz() {
    let score = 0;
    let total = 5;

    // Q1 text answer
    let q1 = document.getElementById("q1").value.toLowerCase();
    if (q1.includes("web") || q1.includes("interactive")) {
        score++;
    }

    // Q2 radio
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "HTML") {
        score++;
    }

    // Q3 radio
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "//") {
        score++;
    }

    // Q4 radio
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "both") {
        score++;
    }

    // Q5 checkbox (React + Angular only)
    let q5 = document.querySelectorAll('input[name="q5"]:checked');
    let answers = Array.from(q5).map(el => el.value);

    if (answers.includes("React") && answers.includes("Angular") && !answers.includes("HTML")) {
        score++;
    }

    // PASS / FAIL LOGIC
    let status = score >= 3 ? "PASS 🎉" : "FAIL ❌";
    let badgeClass = score >= 3 ? "pass" : "fail";

    // RESULT DISPLAY
    document.getElementById("result").innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You got ${score} out of ${total} correct</p>
        <p>${total - score} incorrect</p>
        <div class="badge ${badgeClass}">${status}</div>
    `;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
}
