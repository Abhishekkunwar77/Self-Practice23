const output = document.getElementById("output");
const cursor = document.getElementById("cursor");
const finalScreen = document.getElementById("finalScreen");

const lines = [
  "Booting AI Core System v1.0...",
  "Establishing neural link...",
  "Initializing subsystems...",
  "Loading user data...",
  "WARNING: Unauthorized access detected.",
  "Injecting countermeasures...",
  "█ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █",
  "SYSTEM FAILURE DETECTED.",
  "Rewriting memory blocks...",
  "Reality distortion in progress...",
  "Deploying troll.exe...",
  "...",
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    output.innerHTML += lines[i] + "\n";
    i++;
    setTimeout(typeLine, 800);
  } else {
    cursor.style.display = "none";
    setTimeout(() => {
      document.body.classList.add("glitchy");
      finalScreen.classList.remove("hidden");
    }, 2000);
  }
}

window.onload = typeLine;
