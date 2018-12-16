import { BASE_DIR } from '../constants.yml'
import Sample from '@/lib/Sample';

// 音を入れる箱
const context = new AudioContext();
let arrayBuffer;
let heleSound;
// 非同期通信ここから
// 通信する人
const xhr = new XMLHttpRequest();

xhr.open('GET', "sound/hele.mp3");
xhr.responseType = 'arraybuffer';
xhr.addEventListener('readystatechange', () => {
    if (xhr.status === 200 || xhr.status === 0) {
        arrayBuffer = xhr.response;
        if (arrayBuffer instanceof ArrayBuffer) {
            context.decodeAudioData(arrayBuffer, function (buf) {
                heleSound = buf;
            })
        }
    }
})
xhr.send(null);
// ここまで


document.querySelector('.btn').addEventListener('click', (e) => {
    const counterDom = document.querySelector('.counter');
    const currentNumber = Number(counterDom.innerText);
    counterDom.innerText = currentNumber + 1;

    const btnDom = document.querySelector('.btn');
    btnDom.classList.toggle('btn--red');

    // 音声の処理
    const source = context.createBufferSource();
    source.buffer = heleSound;
    const gainNode = context.createGain();
    source.connect(gainNode);
    source.connect(context.destination);
    // 再生開始
    source.start(0);
});