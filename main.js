'use strict';

let txtBox = document.getElementById("txtBox");
let displayTxtBox = document.getElementById('displayTxtBox');

let pigLatin = (word) => {
  let w = word.toLowerCase();
  let arr = Array.from(w)
  let v = ['a', 'e', 'i', 'o', 'u']  
  for (let i = 0; i < arr.length; i++) {
    let pigLatin='';
    let n = v.indexOf(arr[i]);
    if (n != -1) {     
      let w1=arr.slice(i).join('');
      let w2=arr.slice(0,i).join('');
      if (i==0) {pigLatin=w1+'yay'}
      else (pigLatin=w1+w2+'ay')      
      return pigLatin;     
      break; 
    }
  }
}

let fn = () => {
let txt = txtBox.value;
displayTxtBox.innerHTML = pigLatin(txt)
}



