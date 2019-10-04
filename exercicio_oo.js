 var readline = require('readline-sync');

alunos = [];  
for(i=0;i<1;i++){
  Aluno = function(){
    this.nome = "";
    this.telefone = "";
    this.valor_hora = "";

    this.salvar = function() {
      alunos.push({
        nome: this.nome,
        telefone: this.telefone,
        valor_hora: this.valor_hora
      });  
    }

    this.mostrar = function() {
      for(i=0;i<alunos.length;i++){
        console.log("Nome: " + alunos[i].nome); 
        console.log("Telefone: " + alunos[i].telefone); 
        console.log("Valor hora: " + alunos[i].valor_hora); 
      }  
    }
  }
  aluno = Aluno.new
  aluno.nome = readline.question("Nome do Aluno: ");    
  aluno.telefone = readline.question("Telefone: ");     
  aluno.valor_hora = readline.question("Qual valor/hora: "); 
  aluno.salvar()

  alunos.push(aluno);  
} 

