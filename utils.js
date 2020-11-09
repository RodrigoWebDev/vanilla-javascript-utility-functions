function doubleKeyPress(key1, key2, callback) {
  let key1State = false;
  let key2State = false;

  document.querySelector("body").addEventListener("keydown", function(e) {
    toggleKeyState(e, true);

    if (key1State === true && key2State === true) {
      key1State = false;
      key2State = false;
      callback();
    }
  })

  document.querySelector("body").addEventListener("keyup", function(e) {
    toggleKeyState(e, false);
  })

  function toggleKeyState(e, state) {
    if (e.keyCode === key1) {
      key1State = state;
    }

    if (e.keyCode === key2) {
      key2State = state;
    }
  }
}

function removeLeftZeros(str, char) {
  let newStr = ""

  for(let i = 0;i < str.length; i++){
    if (str[i] !== char ){
      newStr = str.slice(i, str.length)
      break;
    }
  }
  return newStr
}
