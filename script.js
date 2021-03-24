`use sctict`;

function generate() {
    return Math.ceil(Math.random() * 20);
}
let ans = generate();
let currenScore = 20;
let highScore = 0;
console.log(ans);

document.querySelector("#inp input").addEventListener('focus',function () {
    document.querySelector("#inp input").value = '';
})

document.querySelector('#check').addEventListener('click', function () {
    let val = Number(document.querySelector('#inp input').value);
    console.log("val= " + val);
    if (isNaN(val) || val < 1 || val > 20) {
        document.querySelector("#highOrLow").textContent = "Invalid!";
    }
    else if (val > ans) {
        document.querySelector("#highOrLow").textContent = "Too High!";
        currenScore--;
        document.querySelector("#score").textContent=currenScore;
    }
    else if (val < ans) {
        document.querySelector("#highOrLow").textContent = "Too Low!";
        currenScore--;
        document.querySelector("#score").textContent=currenScore;
    }
    else{
        document.querySelector("#highOrLow").textContent = "You Win!";
        document.querySelector("body").style.backgroundColor = "#60b374";
        if (highScore < currenScore) {
            highScore = currenScore;
            document.querySelector("#highScore").textContent=highScore;
        }
        document.getElementById("check").disabled = true;
    }
});

document.querySelector("#again").addEventListener('click', function () {
    document.getElementById("check").disabled = false;
    ans = generate();
    currenScore = 20;
    document.querySelector("#highOrLow").textContent = "Start Guessing!";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("#score").textContent = currenScore;
});