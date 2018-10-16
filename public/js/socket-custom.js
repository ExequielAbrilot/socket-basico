var socket = io();

// on escuchar sucesos
socket.on('connect', function() {
    console.log("conectado al servidor");
})
socket.on('disconnect', function() {
        console.log("perdimos conexion con el servidor, desconectado del servidor");
    })
    // emit envia infomracion
socket.emit('enviarMensaje', {
    usuario: 'Exequiel',
    mensaje: 'Hola Mundo!'

}, function(rs) {
    console.log(rs);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log("servidor:", mensaje);
});