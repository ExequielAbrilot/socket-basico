const { io } = require('../server')

io.on('connection', function(client) {
    console.log("Usuario conectado");

    client.on('disconnect', () => {
        console.log("Usuario desconectado");
    })

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /* if (res.usuario) {
            callback('Si hay');
        } else {
            callback('No hay');
        } */
    })
})