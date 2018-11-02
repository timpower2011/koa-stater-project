import Router from 'koa-router';
import DB from '../models/db.js';

const router = new Router();

router.get('/hello', async(ctx,next)=> {
    ctx.body = 'hallllos';
    
})
router.get('/allUser', async(ctx,next) =>{
    let user = await DB.query("SELECT * FROM public.user",{ type: DB.QueryTypes.SELECT});
    ctx.body = user;
})

export default router;