const valores = [7.7, 8.9, 6.3, 9.2 ]
console.log(valores[0], valores[3]) //Ver os valores do Arrayg
console.log(valores[4])

valores[4] = 10 // Ele mostrará os elementos das Const
console.log(valores)
console.log(valores.length) //Quantidades de elementos de um Array

valores.push({id: 3}, false, null, 'teste') //adicionar elementos ao Array
console.log(valores)

console.log(valores.pop()) //Pegar o ultimo valor do Array
delete valores[0]
console.log(valores)

console.log(typeof valores)