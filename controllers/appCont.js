const db = require('../models');


module.exports = {

    findAll: (req, res) =>{
        console.log(`application information`);
        db.applicationInfos.findAll({}).then((allApps)=>{
            res.json(allApps);
        })
    },
    create: (req, res) =>{
        console.log(req.body);
        db.applicationInfos.create({
            AppName:req.body.business,
            RecrutorName: req.body.jobTitle,
            dateApplied: req.body.dateApplied,
            jobDescription: req.body.jobReq, 
            recrutorEmail: req.body.contact
        })
    },
    delete:(req, res) =>{
        const appID = req.body.id;
        console.log(`to be destroyed ${appID}`);
        db.applicationInfos.destroy({
            where: {id: appID}
        })
    }

}