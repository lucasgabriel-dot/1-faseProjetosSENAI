
   //1) Programar as seguintes entradas de dados de um cliente: Nome, idade, nacionalidade, endereço
   // Após digitados os dados, mostrar na tela a seguinte mensagem
   // "Cliente [Nome], [idade] anos, [nacionalidade], reside no endereço [endereço]."
   // Exemplo: Cliente Lucas, 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

programa {
  funcao inicio() {
    
    // Declaração de variáveis
    cadeia nome 
    inteiro idade
    cadeia nacionalidade
    cadeia endereco

    // Entrada de Dados
    escreva ("Digite seu Nome: ")
    leia (nome)

    escreva ("Qual sua idade? ")
    leia (idade)

    escreva("Qual sua nacionalidade? ")
    leia (nacionalidade)

    escreva ("Qual seu endereço? ")
    leia (endereco)

     // saida de dados!!
     escreva("Cliente " ,nome, ", ", idade ," anos " , ", " , nacionalidade, ", ",  "Reside no endereço: " , endereco)



    




  }
}
