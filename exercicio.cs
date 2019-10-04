class Aluno{
  public static Alunos = new List<Aluno>();
  public string Nome{get;set;}
  public string Telefone{get;set;}
  public float ValorHora{get;set;}

  public void Salvar(){
  	Aluno.Alunos.add(this);
  }

  public void Listar(){
  	foreach(var aluno in Aluno.Alunos){
  		Console.WriteLine("Nome: " + aluno.nome);
  	}
  }
}