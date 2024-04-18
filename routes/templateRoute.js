const express = require('express')
const router = express.Router()
const PDFGeneratorController =require('../controller/pdfController')
router.get('/data' ,async (req, res)=>{
    const jsondata = { name:'Raveendra Patidar' , register_Id :123344 , email:"ravi@gmail.com" , 
    phone:8120367645 , address:"vijay nagar indore" , dob:"25-03-23" , gender :"Male" , bloodgroup:"B+" , date:new Date().toDateString() ,
}
    return res.render('template' ,{
        data:jsondata
    })
})
router.get('/pdf-generate' ,PDFGeneratorController )

module.exports = router;