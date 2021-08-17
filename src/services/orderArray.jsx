

export const orderArray = (array, propiedad) => {
    
    let copyArray = [...array];
    copyArray.sort((a, b) => {
        if (a[propiedad] > b[propiedad]) {
            return -1
        }
        if (a[propiedad] < b[propiedad]) {
            return 1
        }
        else return 0;
    })

    for (let i = 0; i < copyArray.length; i++) {
        if (copyArray[i][propiedad] === 0) {
            copyArray.splice(i, 1); i--;
        }
    }

    return copyArray;
}