function removerDuplicatas(array) {
    // Seu código aqui
    let arrayUnico = [];
    for(let i = 0; i < array.length; i++){
        // Verifica se o elemento atual não está presente no arrayUnico
        if(!arrayUnico.includes(array[i])){
            arrayUnico.push(array[i])
        }
    }

    return arrayUnico
}

console.log(removerDuplicatas([1, 2, 3, 3, 4, 4, 5, 6, 6])); // Saída esperada: [1, 2, 3, 4, 5, 6]
console.log(removerDuplicatas(['a', 'b', 'c', 'c', 'd', 'd', 'e'])); // Saída esperada: ['a', 'b', 'c', 'd', 'e']
