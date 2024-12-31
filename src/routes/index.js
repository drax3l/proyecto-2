
import { Router } from "express"
import { TraerRegistros } from "../public/services/conexion.js"
const router= Router() 
router.get('/',(req, res)=> res.render('index', {title:'mi primera pagina en node'}))
router.get('/about',(req, res)=> res.render('about', {title:'sobre nosotros'}))
router.get('/contact',(req, res)=> res.render('contact', {title:'contactanos'}))

router.get('api/get-curriculum', async(req,res)=>{
    const curriculum= await TraerRegistros()
    res.status(200).json(curriculum);
})
export default router