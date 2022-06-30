var worker = new Worker('static/worker.js');

// Escutando retorno do worker
worker.onmessage = function(event) {
    console.log(event.data);
};

document.getElementById('btn').addEventListener('click', function(){
    console.log('Enviando mensagens!');
    worker.postMessage([
        'https://google.com',
        'https://youtube.com',
        'https://twitter.com',
        'https://lerolero.com'
        ]);
})