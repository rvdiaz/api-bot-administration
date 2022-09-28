const {Router}= require('express');
const router=Router(); 
const {createQuestions,SearchQuestionsByForm}= require('../controllers/questionController');

router.post('/',[],createQuestions);
router.get('/:id',[],SearchQuestionsByForm);
module.exports=router;