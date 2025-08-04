let selectedOption = null;

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";
  selectedOption = null;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => {
      selectedOption = index;
      document.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      nextBtn.style.display = "block";
    };
    optionsBox.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (selectedOption === null) return;
  const correct = questions[currentQuestion].answer;
  if (selectedOption === correct) score++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});
