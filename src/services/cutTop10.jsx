
export const cutTop10 = async (array) => {
    console.log('hola entre')
    let copyArray = [...array]
    let index = parseInt(copyArray.length * .1);
    let arrayAux = copyArray.splice(0, index + 1);
    
    return arrayAux
}