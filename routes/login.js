const Router=require('express');
const router=new Router();
const {authController}=require('../controllers/authController');
const {validateFields}=require('../middleware/validateFields');
const {check}= require('express-validator');

router.post('/',[
    check('user','The name is mandatory').not().isEmpty(),
    check('password',"The password need to has at least 6 characters"),
    validateFields
],authController);

module.exports=router;