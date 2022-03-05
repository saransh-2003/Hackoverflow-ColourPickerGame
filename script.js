let chosenBox,random_r,random_g,random_b,value=6;
let hardbool=true;
let c1=document.getElementById('color1');
let c2=document.getElementById('color2');
let c3=document.getElementById('color3');
let c4=document.getElementById('color4');
let c5=document.getElementById('color5');
let c6=document.getElementById('color6');
function func1(){
  c1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
  c2.style.background = "rgb("+random_g/6+","+random_r+","+random_b/3+")";
  c3.style.background = "rgb("+random_r/2+","+random_b+","+random_g/2+")";
  c4.style.background = "rgb("+random_g+","+random_b+","+random_r/8+")";
  c5.style.background = "rgb("+random_b/6+","+random_r/2+","+random_g/3+")";
  c6.style.background = "rgb("+random_r/4+","+random_b/7+","+random_g/2+")";
}
function func2(){
  c1.style.background = "rgb("+random_r/5+","+random_b/2+","+random_g+")";
  c2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
  c3.style.background = "rgb("+random_r/3+","+random_g+","+random_b/4+")";
  c4.style.background = "rgb("+random_b/8+","+random_r+","+random_g/7+")";
  c5.style.background = "rgb("+random_g/2+","+random_r/2+","+random_b/3+")";
  c6.style.background = "rgb("+random_g+","+random_b+","+random_r/2+")";

}
function func3(){
  c1.style.background = "rgb("+random_b+","+random_r/2+","+random_g+")";
  c2.style.background = "rgb("+random_r/8+","+random_g+","+random_b+")";
  c3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
  c4.style.background = "rgb("+random_b/4+","+random_g/3+","+random_r+")";
  c5.style.background = "rgb("+random_r/2+","+random_b/2+","+random_g/3+")";
  c6.style.background = "rgb("+random_g/7+","+random_r+","+random_b/2+")";
}
function func4(){
  c1.style.background = "rgb("+random_r/7+","+random_g/2+","+random_b+")";
  c2.style.background = "rgb("+random_b/3+","+random_r+","+random_g+")";
  c3.style.background = "rgb("+random_b/2+","+random_g/7+","+random_r+")";
  c4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
  c5.style.background = "rgb("+random_g+","+random_r/2+","+random_b/3+")";
  c6.style.background = "rgb("+random_g/6+","+random_b+","+random_r/2+")";
}
function func5(){
  c1.style.background = "rgb("+random_r/6+","+random_b/2+","+random_g+")";
  c2.style.background = "rgb("+random_b/5+","+random_g+","+random_r+")";
  c3.style.background = "rgb("+random_r+","+random_g+","+random_b/7+")";
  c4.style.background = "rgb("+random_b/2+","+random_r/3+","+random_g+")";
  c5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
  c6.style.background = "rgb("+random_g/7+","+random_b/5+","+random_r/2+")";
}
function func6(){
  c1.style.background = "rgb("+random_r/9+","+random_b/2+","+random_g+")";
  c2.style.background = "rgb("+random_b+","+random_g/8+","+random_r+")";
  c3.style.background = "rgb("+random_g/7+","+random_b+","+random_r/2+")";
  c4.style.background = "rgb("+random_b+","+random_r/3+","+random_g+")";
  c5.style.background = "rgb("+random_g/2+","+random_r+","+random_b/3+")";
  c6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";

}

function easy() {
    c1.disabled=false;
    c2.disabled=false;
    c3.disabled=false;
    c4.disabled=false;
    c5.disabled=false;
    c6.disabled=false;
    c4.style.visibility = "hidden";
    c5.style.visibility = "hidden";
    c6.style.visibility = "hidden";
    chosenBox = Math.floor(Math.random()*3 + 1);
    hardbool=false;
    document.getElementById('background_yellow').style.background = "rgb(231, 198, 9)";
    document.getElementById('tryagain').style.visibility = "hidden";
    random_r = Math.floor(Math.random()*256);
    random_g = Math.floor(Math.random()*256);
    random_b = Math.floor(Math.random()*256);
    document.getElementById('r').innerHTML=random_r;
    document.getElementById('g').innerHTML=random_g;
    document.getElementById('b').innerHTML=random_b;
    if (chosenBox==1) {
        func1()
    }
    else if (chosenBox==2) {
        func2()
    }
    else if (chosenBox==3) {
        func3()
    }
}
function hard() {
    c1.disabled=false;
    c2.disabled=false;
    c3.disabled=false;
    c4.disabled=false;
    c5.disabled=false;
    c6.disabled=false;
    c4.style.visibility = "visible";
    c5.style.visibility = "visible";
    c6.style.visibility = "visible";
    chosenBox = Math.floor(Math.random()*6 + 1);
    hardbool=true;
    document.getElementById('background_yellow').style.background = "rgb(231, 198, 9)";
    document.getElementById('tryagain').style.visibility = "hidden";
    random_r = Math.floor(Math.random()*256);
    random_g = Math.floor(Math.random()*256);
    random_b = Math.floor(Math.random()*256);
    document.getElementById('r').innerHTML=random_r;
    document.getElementById('g').innerHTML=random_g;
    document.getElementById('b').innerHTML=random_b;
    chosenBox = Math.floor(Math.random()*6 + 1);
    if (chosenBox==1) {
        func1()
    }
    else if (chosenBox==2) {
        func2()
    }
    else if (chosenBox==3) {
        func3()
    }
    else if (chosenBox==4) {
        func4()

    }
    else if (chosenBox==5) {
        func5()
    }
    else if (chosenBox==6) {
        func6()
    }
}
function rgb() {
    c1.disabled=false;
    c2.disabled=false;
    c3.disabled=false;
    c4.disabled=false;
    c5.disabled=false;
    c6.disabled=false;
    document.getElementById('background_yellow').style.background = "rgb(231, 198, 9)";
    document.getElementById('tryagain').style.visibility = "hidden";
    random_r = Math.floor(Math.random()*256);
    random_g = Math.floor(Math.random()*256);
    random_b = Math.floor(Math.random()*256);
    document.getElementById('r').innerHTML=random_r;
    document.getElementById('g').innerHTML=random_g;
    document.getElementById('b').innerHTML=random_b;
    let value;
    if (c4.style.visibility == "hidden") {
        value = 3;
    }
    else {
        value = 6;
    }
    chosenBox = Math.floor(Math.random()*value+1);
    if (chosenBox==1) {
        func1()
    }
    else if (chosenBox==2) {
        func2()
    }
    else if (chosenBox==3) {
        func3()
    }
    else if (chosenBox==4) {
        func4()
    }
    else if (chosenBox==5) {
        func5()
    }
    else if (chosenBox==6) {
        func6()
    }
    value=6;
}
function color_choice1() {
    if (chosenBox==1) {
        c2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c2.style.visibility = "visible";
        c3.style.visibility = "visible";
        c4.style.visibility = "visible";
        c5.style.visibility = "visible";
        c6.style.visibility = "visible";
        document.getElementById('background_yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        c1.disabled=true;
        c2.disabled=true;
        c3.disabled=true;
        c4.disabled=true;
        c5.disabled=true;
        c6.disabled=true;
    }
    else {
        c1.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function color_choice2() {
    if (chosenBox==2) {
        c1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c1.style.visibility = "visible";
        c3.style.visibility = "visible";
        c4.style.visibility = "visible";
        c5.style.visibility = "visible";
        c6.style.visibility = "visible";
        document.getElementById('background_yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        c1.disabled=true;
        c2.disabled=true;
        c3.disabled=true;
        c4.disabled=true;
        c5.disabled=true;
        c6.disabled=true;
    }
    else {
        c2.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function color_choice3() {
    if (chosenBox==3) {
        c2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c2.style.visibility = "visible";
        c1.style.visibility = "visible";
        c4.style.visibility = "visible";
        c5.style.visibility = "visible";
        c6.style.visibility = "visible";
        document.getElementById('background_yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        c1.disabled=true;
        c2.disabled=true;
        c3.disabled=true;
        c4.disabled=true;
        c5.disabled=true;
        c6.disabled=true;
    }
    else {
        c3.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function color_choice4() {
    if (chosenBox==4) {
        c2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c2.style.visibility = "visible";
        c1.style.visibility = "visible";
        c3.style.visibility = "visible";
        c5.style.visibility = "visible";
        c6.style.visibility = "visible";
        document.getElementById('background_yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        c1.disabled=true;
        c2.disabled=true;
        c3.disabled=true;
        c4.disabled=true;
        c5.disabled=true;
        c6.disabled=true;
    }
    else {
        c4.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function color_choice5() {
    if (chosenBox==5) {
        c2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c6.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c2.style.visibility = "visible";
        c1.style.visibility = "visible";
        c4.style.visibility = "visible";
        c3.style.visibility = "visible";
        c6.style.visibility = "visible";
        document.getElementById('background_yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        c1.disabled=true;
        c2.disabled=true;
        c3.disabled=true;
        c4.disabled=true;
        c5.disabled=true;
        c6.disabled=true;
    }
    else {
        c5.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
function color_choice6() {
    if (chosenBox==6) {
        c2.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c1.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c4.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c5.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c3.style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        c2.style.visibility = "visible";
        c1.style.visibility = "visible";
        c4.style.visibility = "visible";
        c5.style.visibility = "visible";
        c3.style.visibility = "visible";
        document.getElementById('background_yellow').style.background = "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Correct!!";
        document.getElementById('newcolor').innerHTML = "PLAY AGAIN";
        c1.disabled=true;
        c2.disabled=true;
        c3.disabled=true;
        c4.disabled=true;
        c5.disabled=true;
        c6.disabled=true;
    }
    else {
        c6.style.visibility = "hidden";
        document.getElementById('tryagain').style.visibility = "visible";
        document.getElementById('tryagain').innerHTML = "Try again";
    }
}
