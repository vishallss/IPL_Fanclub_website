function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function vote() {
  const choice = document.getElementById("poll").value;
  const result = document.getElementById("result");

  // Fake poll data (for demo)
  const votes = {
    "Virat Kohli": 70,
    "Rajat Patidar": 45,
    "Devdutt Padikkal": 30,
    "Tim David": 40,
    "Josh Hazlewood": 25
  };

  // Animated confirmation
  result.innerHTML = "✅ Vote recorded for <b>" + choice + "</b>!";

  // Reset bars
  document.querySelectorAll(".fill").forEach(bar => bar.style.width = "0");

  // Animate result bars
  setTimeout(() => {
    document.getElementById("vk").style.width = votes["Virat Kohli"] + "%";
    document.getElementById("rp").style.width = votes["Rajat Patidar"] + "%";
    document.getElementById("dp").style.width = votes["Devdutt Padikkal"] + "%";
    document.getElementById("td").style.width = votes["Tim David"] + "%";
    document.getElementById("jh").style.width = votes["Josh Hazlewood"] + "%";
  }, 300);
}

