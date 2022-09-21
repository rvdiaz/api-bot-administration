//const { Client,MessageMedia,LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const {SearchClient,SaveClient,UpdatedLastForm,UpdatedLanguage,getLastForm}=require('./controllers/clientController');
const {createBot,updatedBotInitStatus,updatedBotAuthStatus}=require('./controllers/botController');
const {PrimerForm,InicioForm,getFormQuestionsById}=require('./controllers/formController');
const {SearchQuestionsByForm}=require('./controllers/questionController');
const {isValidNumber,cleanNumber}= require('./controllers/handle');
const {getAnswerById}=require('./controllers/answerController');
const {getLeafById,getLeafArrayByAnswer}=require('./controllers/leafController');

//para usar las variables de entorno
require('dotenv').config();
const cors= require('cors');

//para importar express
const express= require('express');

//Para llamar a la base de datos
const {dbConnection}=require('./db/config');
let port=process.env.PORT || 3000;

//Crear el servidor de express
const app=express();

//cors
app.use(cors());


//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body desde el frontend
app.use(express.json());  

app.use('/api/preguntas', require('./routes/questions'));
app.use('/api/cuestionario', require('./routes/cuestionario'));
app.use('/',(req,res)=>{
    res.send("hello world");
});


/**
 * Verificamos si tienes un gesto de db
 */

if (process.env.DATABASE === 'mongo') {
    //base de datos
    dbConnection();
}

//Escuchar peticiones
app.listen(port,()=>{
    console.log(`servidor corriendo en puerto ${port}`);
})

//El process.env.port es una variable de entorno que creo en el archivo .env y que se llama port y asume el puerto 4000