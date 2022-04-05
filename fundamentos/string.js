const escola = "Cod3r"

console.log(escola.charAt(4)) // Qual é a letra da String
console.log(escola.charAt(5)) // Não retornou nada pq não tem
console.log(escola.charCodeAt(3)) // Encontrou o codigo html da letra da String
console.log(escola.indexOf('3')) // Para achar se tem o digito em aspas na string

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // Do indice 0 até o indice 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") // o + na String funciona como Concatenação
console.log(escola.replace(3 , 'e'))

console.log('Ana,Maria,Pedro'.split(','))