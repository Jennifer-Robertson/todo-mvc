module.exports = {
    getControllerPage: (req,res)=>{
        res.render('controller.ejs')
    },
    getModelPage: (req,res)=>{
        res.render('model.ejs')
    },

    getViewPage: (req,res)=>{
        res.render('view.ejs')
    }
}