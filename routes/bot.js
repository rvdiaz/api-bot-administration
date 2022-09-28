const Router=require('express');
const router=new Router();
const {getBot}=require('../controllers/botController');

router.get('/',[],getBot);

module.exports=router;