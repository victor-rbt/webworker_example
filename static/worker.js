// Escutando mensagens
onmessage = async function(event){
    const timer = ms => new Promise(res => setTimeout(res, ms));

    for (var i = 0; i < event.data.length; i++){
        await timer(5000);
        fetch('http://127.0.0.1:5000/gravar?txt=' + event.data[i]);
    }
    postMessage('Requisicao enviada!')
}
