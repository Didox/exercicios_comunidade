 var readline = require('readline-sync');

alunos = [];  
for(i=0;i<1;i++){    
  aluno = {}
  aluno.nome =  readline.question("Nome do Aluno: ");    
  aluno.telefone = readline.question("Telefone: ");     
  aluno.valor_hora = readline.question("Qual valor/hora: "); 

  alunos.push(aluno);  
} 

for(i=0;i<alunos.length;i++){
  console.log("Nome: " + alunos[i].nome); 
  console.log("Telefone: " + alunos[i].telefone); 
  console.log("Valor hora: " + alunos[i].valor_hora); 
}  