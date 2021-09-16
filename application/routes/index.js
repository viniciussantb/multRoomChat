module.exports = function(app){
    app.get('/', (req, res)=>{
        app.application.controllers.index.getIndex(app, req, res);
    });
}