let result  = document.getElementById('result');

let nums = document.querySelectorAll('li');

let dm = 'dark mode';

let lm = 'light mode';

let admin = `IceGee`;

let darkCalbdy = document.getElementById("darmod");

let lightCalbdy = document.getElementById("ligm");

let backCal = document.getElementById("calbdy");

const eqCal = document.getElementById("equals");

let clock = document.getElementById("timebdy");

let hrs = document.getElementById("hrs");

let min = document.getElementById("min");

let sec = document.getElementById("sec")

setInterval(() => {
    let times = new Date;
    
    hrs.innerHTML = (times.getHours()<10?"0":"") + times.getHours() ;
    
    min.innerHTML = (times.getMinutes()<10?"0":"") + times.getMinutes() ;

    sec.innerHTML = (times.getSeconds()<10?"0":"") + times.getSeconds() ;
    }, 1000);
    


darkCalbdy.onclick = () =>{
        alert(`${dm}`)
        backCal.style.backgroundColor = "#033e00";
        timebdy.style.backgroundColor = "darkgreen";
        eqCal.style.backgroundColor = "darkgreen";
        clock.style.backgroundColor = "#2c3e50";
        document.body.style.background = "#2c3e50";
        result.style.background = "#2c3e50";
} 

lightCalbdy.onclick = () =>{
        alert(`${lm}`)
        backCal.style.backgroundColor = "green";
        timebdy.style.backgroundColour= "green";
        eqCal.style.backgroundColor = "#00923d"
        document.body.style.background = "white";
        clock.style.backgroundColor = "#e3e3e3";
        result.style.background = "#e3e3e3";
} 
         
setTimeout(() => {
        loader.style.animation = "slideOut 0.5s forwards";
        setTimeout(() => {
            loader.style.zIndex = "-20"
        }, 600)
}, 2000)

 
for (let i = 0; i < nums.length; i++) {
    //console.log(nums[i].innerHTML);

result.value.innerHTML;

nums[i].addEventListener('click',function() {
//console.log(nums[i].innerHTML);
let getvalue = document.getElementById('result').value

if (nums[i].innerHTML == "=") {
    result.value = eval(result.value)
}else if (nums[i].innerHTML == "pat") {
    result.value = "";
}
else{
    if (nums[i].innerHTML == "C" || nums[i].innerHTML == "CE") {
        result.value = "";
    } else {
        result.value += nums[i].innerHTML;
    }
    if (nums[i].innerHTML == "Del") {
        result.value=getvalue.slice(0,-1);

    }
}

})}


// nums.forEach((button) => {
//     button.addEventListener(("click") , () => {
//      if(button.innerHTML == "=") {
//         result.value = eval(result.value)
//      } else{
//         result.value += button.innerHTML
//      }
//     })
// })


function des() {
    alert(`${admin} calculator`)
}

