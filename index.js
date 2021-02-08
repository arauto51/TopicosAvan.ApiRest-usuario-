const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json())

let  student= [];

fs.readFile('teste.json', (err, data) => {
    if (err) throw err;
    student = JSON.parse(data);
    console.log(student);
    
});


//deixei como comentario, isso é do exemplo que fiz, não tem nada a ver com atividade
/*const users = [
    {name: 'Jones', email: 'jones@gmail.com'},
    {name: 'Henrique', email: 'henrique@hotmail.com'}
  ]
*/
  
  app.get('/', (req, res) => {
    res.json(student)
    
});
  
  app.post('/', (req, res) => {
    //users.push(req.body)
  
    student.push(req.body)
    fs.writeFileSync('teste.json', JSON.stringify(student));
    res.json(student)
    

  });
  app.put('/:id', (req, res) => {
   var id = req.params.id;
    student [id]["nome"] = req.body.nome;
    student [id] ["cpf"] = req.body.cpf;
    student [id] ["email"] = req.body.email;
    student [id] ["login"] = req.body.login;
    student [id] ["senha"] = req.body.senha; 
     fs.writeFileSync('teste.json', JSON.stringify(student));
    res.json(student);

  });
  
  app.delete('/:id', (req, res) => {
    var id = req.params.id;
    delete student [(req.body.id-1)];
    fs.writeFileSync('teste.json', JSON.stringify(student));
    res.json(student)
   });

  app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
  });