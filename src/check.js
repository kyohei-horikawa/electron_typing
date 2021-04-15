function check() {
  const ans = document.getElementById("word").innerText;
  const input = document.getElementById("input").innerText;
  if (ans == input) {
    newWord();
  }
}
