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

function checkInvalideDate(date) {
  let day = parseInt(date.split("/")[0])
  let month = parseInt(date.split("/")[1])
  if (month === 2 && day > 29) {
    return true;
  }else if((month === 4 || month === 6 || month === 9 || month === 11) && day > 30){
    return true;
  }else if(day > 31 || month > 12){
    return true;
  }else{
    return false;
  }
}

function formataCampoData(element) {
  var elm = document.querySelector(element);
  elm.addEventListener('keypress', function(e) {
    if (e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }

    var len = elm.value.length;

    if (len !== 1 || len !== 3) {
      if (e.keyCode == 47) {
        e.preventDefault();
      }
    }

    if (len === 2) {
      elm.value += '/';
    }

    if (len === 5) {
      elm.value += '/';
    }
  });
}
