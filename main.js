const audioElem = {
    n: ["<p>ありがとう</p>" + "<p>ございます</p>", "./audio/arigatou.wav"],
    e: ["え？", "./audio/e.wav"],
    d: ["えぇ!?", "./audio/ee.wav"],
    j: ["えへへ", "./audio/ehehe.wav"],
    h: ["はぁ...", "./audio/haa.wav"],
    y: ["はい!", "./audio/hai.wav"],
    k: ["わぁ!!!", "./audio/kokeru.wav"],
    p: ["Pさん♪", "./audio/Psan.wav"]
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