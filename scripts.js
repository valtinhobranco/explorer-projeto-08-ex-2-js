let listStudents = [
  {
    name: "Erica",
    firstNote : 9 ,
    secondNote: 7
  }, 
  {
    name: "Valter",
    firstNote : 6 ,
    secondNote: 6.5
  }, 
  {
    name: "Carol",
    firstNote : 7 ,
    secondNote: 8
  }, 
]


const printIMCPatients = (students) => {
  let mediaStudent = (students.firstNote + students.secondNote) / 2 
  return `
  A média do(a) Aluno(a) ${students.name} é de ${(mediaStudent).toFixed(1)} 
  ${mediaStudent >= 7 ? `Parabéns, ${students.name}! Você foi aprovado(a) no concurso!` : `Não foi desta vez, ${students.name}! Tente novamente!`} 
  `
}



for (let student of listStudents) {
  let listMedia = printIMCPatients(student)
  alert(listMedia)

}










