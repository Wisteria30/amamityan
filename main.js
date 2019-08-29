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
    audio = new Audio(src);
    audio.play();
}

function StopSound(elem) {
    elem.audio.pause();
}

function writeKey(event) {
    target = document.getElementById("message");
    if (event.key in audioElem) {
        PlaySound(audioElem[event.key][1]);
        target.innerHTML = audioElem[event.key][0];
    }
    setTimeout(() => { target.innerHTML = ""; }, 300);
}

window.document.onkeydown = function (event) {
    writeKey(event);
}