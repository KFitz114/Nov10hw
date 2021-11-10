const express = require ('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const mongoose = require ('mongoose');
mongoose.connect('"mongodb+srv://KFitzGerald:Password1234!@skillspirecluster.opbwt.mongodb.net/petListDatabase?retryWrites=true&w=majority"')

mongoose.connection.once('open', () => {
    console.log('DB connected');
})

const Schema = mongoose.Schema;

const PetSchema = new Schema ({
    petType: String,
    numberOf: Number
})

const PetModel = mongoose.model('Pet', PetSchema);

app.listen ('3400', () => {
    console.log('App listening on port 3400')}
);

app.get('/', async function(req,res) {
    const pet = await PetModel.find();
    console.log('Pet: ', pet)

    res.send({pet});
})

app.post('/submit', async function(req, res) {
    console.log(req.body);
    let pet = {
        petType: req.body.petType,
        numberOf: req.body.numberOf
    };
    const petPost = await PetModel.create(pet);
    console.log('Pet: ', pet);

    res.send({message: 'Posted'})
})




