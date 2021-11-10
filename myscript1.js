function retornarClientes()
{

	let usuarios = 
	[
		{
			nome: "Angela",
			email: "angela@gmail.com",
			saldo: -10,
			faturaEmAberto: "true",
			diasDeAtraso: 5,
			produtos: [
			"contaPoupanca","contaCorrente","SeguroDeVida"]
			
		},
		{
			nome: "Ana Paula",
			email: "anapaula@gmail.com",
			saldo: -100,
			diasDeAtraso: " ",
			produtos: [
			"contaPoupanca","contaCorrente"]
		},
		{
			nome: "Carla",
			email: "carla@gmail.com",
			saldo: -200,
			diasDeAtraso: " ",
			produtos: [
			"contaPoupanca"]
			
		},
		{
			nome: "Irani",
			email: "irani@gmail.com",
			saldo: -10,
			diasDeAtraso: " ",
			produtos: [
			"SeguroDeVida"]
		}
	]

    //let clientes = retornarClientes();
    let tam = usuarios.length;

    
    
    //Loop 	
     for (let i = 0; i <= usuarios.length ; i++)
    {	
	  for (let j = 0; j <= usuarios[i].produtos.length ; j++)
	  {
		 //  se usuários tiver o valor negativo o saldo   e   o produto = seguro de vida, imprime na tela  enviar e-mail + usuário.
       if( usuarios[i].saldo < 0 && usuarios[i].produtos[j] == "SeguroDeVida"){
       msgA =  usuarios[i].nome;

       console.log("Envie e-mail para os seguintes clientes: " + msgA);

	  	 }
       }
     }
    }
