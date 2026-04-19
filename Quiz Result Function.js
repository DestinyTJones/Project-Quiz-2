function showResult(correct, total) {
    const resultDiv = document.getElementById("result");

    // PASS / FAIL logic
    let status = correct >= Math.ceil(total / 2) ? "PASS 🎉" : "FAIL ❌";
    let badgeClass = correct >= Math.ceil(total / 2) ? "pass" : "fail";

    resultDiv.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You got ${correct} out of ${total} correct</p>
        <p>${total - correct} incorrect</p>
        <div class="badge ${badgeClass}">${status}</div>
    `;
}
