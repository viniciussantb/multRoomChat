module.exports = (app) => {
    app.post('/chat', (req, res) => {
        app.application.controllers.chat.iniciaChat(app, req, res);
    })

    app.get('/chat', (req, res) => {
        app.application.controllers.chat.iniciaChat(app, req, res);
    })
}