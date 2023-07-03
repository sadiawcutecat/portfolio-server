const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

const project = require('./Data/project.json');


app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('my portfolio is running successfully')
})

app.get('/project',(req, res) => {
    res.send(project);
})

app.get('/project/:id',(req, res) => {
    const id = req.params.id;
    const selectedProject = project.find(proj => proj._id === id);
    res.send(selectedProject);
})

app.listen(port, () => console.log('my portfolio is successfully running on my port:',port))