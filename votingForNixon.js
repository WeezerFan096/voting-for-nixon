field.onclick = function(event){SVGAElement
    let fieldCoords = this.getBoundingClientRect();


let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 - 10, 
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 - 7
}
if(ballCoords.top < 0){ballCoords.top =0}
if(ballCoords.left < 0){ballCoords.left =0}
if(ballCoords.top + ball.clientHeight > field.clientHeight){ballCoords.top = field.clientHeight - ball.clientHeight}
if(ballCoords.left + ball.clientWidth > field.clientHeight){ballCoords.left = field.clientWidth - ball.clientWidth}
ball.style.left = ballCoords.left + 'px'
ball.style.top = ballCoords.top + 'px'
}
function loadEvent(){
    alert("welcome! please cast your vote.")
}
function openWin(){
    myWindow=window.open('','NewerMsgWindow','width=200,height=100');
    myWindow.document.write("you have voted for: Richard M. Nixon. Thank you for your contribution to our democracy!______________________________________________");
}
function openWin2(){
    myNewWindow=window.open('','NewMsgWindow','width=200,height=100');
    myNewWindow.document.write("Wrong Choice. You have voted for: Richard M. Nixon. Thank you for your contribution to our democracy!");
}


function bigPic(e) {
    nixPic.style.height = "9in";
    nixPic.style.width = "9in";
}

function regPic(e) {
    nixPic.style.height = "5in";
    nixPic.style.width = "5in";
}
function bigPic2(e) {
    jfkPic.style.height = "9in";
    jfkPic.style.width = "9in";
}

function regPic2(e) {
    jfkPic.style.height = "5in";
    jfkPic.style.width = "5in";
}
function undoBoom(){
    let removeElm = document.getElementById("jfk");
    let removeElm2 = document.getElementById("jfkPic");
    let removeElm3 = document.getElementById("jfkText");
    removeElm.remove();
    removeElm2.remove();
    removeElm3.remove();
    alert('Too bad, I dont care')
}
document.addEventListener('contextmenu', function(e) {
    alert('Stop trying to investigate');
    });
field.onclick = function(event){SVGAElement
let fieldCoords = this.getBoundingClientRect();
let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 - 10, 
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 - 7
}
if(ballCoords.top < 0){ballCoords.top =0}
if(ballCoords.left < 0){ballCoords.left =0}
if(ballCoords.top + ball.clientHeight > field.clientHeight){ballCoords.top = field.clientHeight - ball.clientHeight}
if(ballCoords.left + ball.clientWidth > field.clientHeight){ballCoords.left = field.clientWidth - ball.clientWidth}
ball.style.left = ballCoords.left + 'px'
ball.style.top = ballCoords.top + 'px'
}
let mathArray = ["item", "item"]
let parent = document.querySelector('#field');
function crateBoom(){
    for (let i = 1; i <= 9; i++) {
        let p = document.createElement('p')
        p.textContent = 'Vote For Nixon!!!!';
        parent.appendChild(p);
    }
};
