const { AppModel } = require("./models")

const router = require("express").Router()


router.post("/apps", async(req, res) => {
    try{
        const app = new AppModel(req.body)
        await app.save()
        res.send({ message: 'Saved' }).status(200)
    }catch(err){
        res.send({ error: err }).status(500)
    }
})


module.exports = { router }
