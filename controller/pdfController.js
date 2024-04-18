const puppeteer = require('puppeteer')
const path = require('path')
const PDFGeneratorController = async(req,res)=>{
    try {
      const browser =  await  puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(`${req.protocol}://${req.get('host')}` + '/data' , {
        waitUntil:'networkidle2'
      })

     await page.setViewport({width:1000 , height:1000 })
     const currentDate = new Date()
    const pdfFormat =  await page.pdf({
        path:`${path.join(__dirname , '../public/pdffiles', currentDate.getTime() + 'pdf' )}`,
        format:"A2"
     })
     await browser.close();
     const pdfURL = path.join(__dirname , '../public/pdffiles', currentDate.getTime() + 'pdf' )
     res.set({
        "Content-Type" :"application/pdf" , 
        "Content-Length":pdfFormat.length
     })
     res.sendFile(pdfURL)
    } catch (error) {
        console.log(error);
    }
}
module.exports = PDFGeneratorController;