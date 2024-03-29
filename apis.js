const { AppModel } = require("./models")

const router = require("express").Router()


router.post("/apps", async(req, res) => {
    try{
        const host = req.get("host")
        const app = new AppModel({ ...req.body, time: new Date(), host, ip: req.ip })
        await app.save()
        res.send({ message: 'Saved' }).status(200)
    }catch(err){
        res.send({ error: err }).status(500)
    }
})

router.get("/test", async(req, res) => {
    try{
        res.send({ message: 'Success' }).status(200)
    }catch(err){
        res.send({ error: err }).status(500)
    }
})


module.exports = { router }
