const words = ["apple", "dir", "python"];
var word_index = 0;

document.onkeydown = function (e) {
  if (!e) e = window.event;
  // 出力テスト
  console.log(e.key);
  if (e.key == "Enter") {
    check();
  } 
  if (e.key == "'") {
    id = "quote";
  } else if (e.key == ";") {
    id = "semicolon";
  } else if (e.key == ",") {
    id = "comma";
  } else if (e.key == ".") {
    id = "period";
  } else if (e.key == "/") {
    id = "slash";
  } else if (e.key == "[") {
    id = "left-bracket";
  } else if (e.key == "]") {
    id = "right-bracket";
  } else if (e.key == "-") {
    id = "hyphen";
  } else if (e.key == "=") {
    id = "equal";
  } else if (e.key == "\\") {
    id = "backslash";
  } else if (e.key == "`") {
    id = "tilde";
  } else {
    id = e.key;
  }
  const dom = document.getElementById(id);
  if (dom != null) {
    const oldClass = dom.className;
    dom.className = "focus";
    function ReversionClass() {
      dom.className = oldClass;
      if (document.getElementsByClassName("focus")[0]) {
        document.getElementsByClassName("focus")[0].className = "key-image";
      }
    }

    setTimeout(ReversionClass, 100);
  }
  if (
    e.key != "Backspace" &&
    e.key != "Enter" &&
    e.key != "Shift" &&
    e.key != "Control" &&
    e.key != "Tab" &&
    e.key != "Meta" &&
    e.key != "Unidentified" &&
    e.key != "Escape" &&
    e.key != "ArrowRight" &&
    e.key != "ArrowLeft" &&
    e.key != "ArrowUp" &&
    e.key != "ArrowDown" &&
    e.key != "Alt"
  ) {
    if (document.getElementById("word").innerText[word_index] === e.key) {
      document.getElementById("input").innerText += e.key;
      word_index += 1;
    }
  }
};

function check() {
  const ans = document.getElementById("word").innerText;
  const input = document.getElementById("input").innerText;
  if (ans == input) {
    newWord();
    word_index = 0;
  }
}

function newWord() {
  var rand = Math.floor(Math.random() * words.length);
  document.getElementById("word").innerText = words[rand];
  document.getElementById("input").innerText = "";
}
