

export const cutTop10 = (array) => {
    let copyArray = [...array]
    let index = parseInt(copyArray.length * .1);
    let arrayAux = copyArray.splice(0, index + 1);
    return arrayAux
}