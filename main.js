const audioElem = {
    n: ["<p>ありがとう</p>" + "<p>ございます</p>", "./audio/arigatou.mp3"],
    e: ["え？", "./audio/e.mp3"],
    d: ["えぇ!?", "./audio/ee.mp3"],
    j: ["えへへ", "./audio/ehehe.mp3"],
    h: ["はぁ...", "./audio/haa.mp3"],
    y: ["はい!", "./audio/hai.mp3"],
    k: ["わぁ!!!", "./audio/kokeru.mp3"],
    p: ["Pさん♪", "./audio/Psan.mp3"]
};

window.onload = function () {
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
        window.location.href = 'sorry.html';
    }
}

function PlaySound(src) {
    let startTime = performance.now();
    let audio = new Audio(src);
    let endTime = performance.now();
    console.log("create Audio Object")
    console.log(endTime - startTime);

    startTime = performance.now();
    audio.play();
    endTime = performance.now();
    console.log("play Audio")
    console.log(endTime - startTime);
}

function writeKey(event) {
    let target = document.getElementById("message");
    if (event.key in audioElem) {
        PlaySound(audioElem[event.key][1]);
        target.innerHTML = audioElem[event.key][0];
    }
    setTimeout(() => { target.innerHTML = ""; }, 500);
}

function rightUp(event) {
    if (event.key in audioElem) {
        let target = document.getElementById(event.key);
        target.style.backgroundColor = "#FFCCCC";
        setTimeout(() => { target.style.backgroundColor = "#FF6565"; }, 300);
    }
}

window.document.onkeydown = function (event) {
    writeKey(event);
    rightUp(event);
}