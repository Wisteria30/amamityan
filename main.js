const audioElem = {
    l: ["<p>ありがとう</p>" + "<p>ございます</p>", "./audio/arigatou.mp3"],
    j: ["え？", "./audio/e.mp3"],
    e: ["えぇ!?", "./audio/ee.mp3"],
    i: ["えへへ", "./audio/ehehe.mp3"],
    w: ["はぁ...", "./audio/haa.mp3"],
    f: ["はい!", "./audio/hai.mp3"],
    r: ["わぁ!!!", "./audio/kokeru.mp3"],
    o: ["Pさん♪", "./audio/Psan.mp3"]
};

window.onload = function () {
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
        window.location.href = 'sorry.html';
    }
}

function PlaySound(src) {
    let audio = new Audio(src);
    audio.play();
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