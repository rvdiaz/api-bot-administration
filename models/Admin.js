const {Schema,model}=require('mongoose');

const admin=Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const Admin=model('admin',admin);

module.exports={
    Admin
}