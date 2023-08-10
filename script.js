/*Neste desáfio deverá ser criado uma lista de estudante e, cada estudante dentro dessa lista deverá conter os seguintes dados:

 - nome;
 - nota da primeira prova;
 - mnota da segunda prova;


 Depois de criada a lista:

 -> Criar uma função que irá calcular a média das notas de cada aluno;
 -> Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no consurso e mostre uma mensagem na tela.

*/

let students = [];
let menuOptions;

while (menuOptions != 4) {
    menuOptions = Number(prompt(`Bem vindo ao portal da escola! Digite o número desejado para acessar sua opção:
    
    1° Para cadastrar um estudante;
    2° Para calcular a média do estudante;
    3° Informações gerais dos alunos;
    4° Para encerrar.    
    `))

    switch(menuOptions) {
        case 1: 
         let name = prompt("Digite o nome do estudante: ");
         let n1 = Number(prompt("Digite a primeira nota do aluno: "));
         let n2 = Number(prompt("Digite a segunda nota do aluno:"));

         students.push[{
            nome: name,
            firstNote: n1,
            secondNote: n2
         }
        ]
        alert(`Aluno ${name}, cadastrado com sucesso`);
        break;

        case 2: 
        if(students.length == 0) {
            alert("Não é possível calcular média pois não existe cadastro")
        } else {
            function calculeAvarege (n1, n2){
            return (n1 + n2) / 2 .toFixed(1) 
            }

            function printAvarege (student){
                return `O estudante ${student.nome} tem a média
                ${calculeAvarege(student.firstNote, student.secondNote)}`; 
            }

            for(let avarege of students){
                let avaregeMessage = printAvarege(avarege)
                alert(avaregeMessage);
            }
        }     
        break;
        
        case 3: 
        if(students.length == 0) {
            alert("Não existe estudantes cadastrados");
        } else {
             let studentsInfo = [];
            for(let student of students){
            studentsInfo.push(`O nome do estudante é ${student.nome}, a primeira nota é ${student.firstNote}, a segunda nota é ${student.secondNote} e a média dele é ${calculeAvarege(student.firstNote, student.secondNote)}`);
        }
        }
       break;

       case 4: 
       alert("Programa encerrado");
       break;

       default:
        alert("Alternativa inválida, tente novamente")
    }
}