function showResult(correct, total) {
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You got ${correct} out of ${total} correct</p>
        <p>${total - correct} incorrect</p>
    `;
}