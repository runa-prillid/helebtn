import { BASE_DIR } from '../constants.yml'
import Sample from '@/lib/Sample';
import axios from 'axios';
import {playSound, toggleColor} from '@/lib/playSound';

// 音を入れる箱
const context = new AudioContext();
let arrayBuffer;
let heleSound;
// 非同期通信ここから

const path = "sound/hele.mp3";

// axios
//     .get(path, {
//         responseType: "arraybuffer"
//         })
//     .then(new Promise(function (resolve, reject) {
//         response => {
//             arrayBuffer = response.data;
//             context.decodeAudioData(arrayBuffer, function (buf) {
//                 heleSound = buf;
//             });
//         }
//     })
//     )
//     .catch(err => {
//         console.log("err:", err);
//     });

// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('foo');
//         reject('bar');
//     }, 300);
// });

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

document.querySelector('.btn').addEventListener('click', async (e) => {
    heleInc()
    await playSound(context, heleSound);
    await toggleColor();
});

const heleInc = ()=>{
    const counterDom = document.querySelector('.counter');
    const currentNumber = Number(counterDom.innerText);
    counterDom.innerText = currentNumber + 1;
}

