window.onload = function () {
    const analyzeBtn = document.getElementById("analyzeBtn");
    const moodInput = document.getElementById("moodInput");
    const responseDiv = document.getElementById("response");
  
    analyzeBtn.addEventListener("click", function () {
      const moodText = moodInput.value.trim();
      if (moodText === "") {
        responseDiv.textContent = "Please enter something!";
      } else {
        responseDiv.textContent = "Analyzing your mood... 🧠";
        setTimeout(() => {
          responseDiv.textContent = "You seem low. It’s okay to feel this way. Sending you good vibes 💛";
        }, 1500);
      }
    });
  };
  