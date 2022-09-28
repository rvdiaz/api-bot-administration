const Router=require('express');
const router=new Router();
const {getClients}=require('../controllers/clientController');

router.get('/',[],getClients);

module.exports=router;