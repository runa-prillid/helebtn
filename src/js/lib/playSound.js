// export default (context, sound) => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             // 音声の処理
//             const source = context.createBufferSource();
//             source.buffer = sound;
//             source.connect(context.destination);
//             // 再生開始
//             source.start(0);
//             resolve();
//         }, 2000)
//     });
// }

const playSound =  (context, sound) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 音声の処理
            const source = context.createBufferSource();
            source.buffer = sound;
            source.connect(context.destination);
            // 再生開始
            source.start(0);
            resolve();
        }, 2000)
    });
}

const toggleColor = () => {
    return new Promise(function (resolve) {
        setTimeout(function () {
            const btnDom = document.querySelector('.btn');
            btnDom.classList.toggle('btn--red');
            resolve();
        }, 2000)
    })
}

export {playSound, toggleColor}