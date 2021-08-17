

export const orderArray =  async (array, property) => {
    console.log('hola entre')
    let copyArray = await [...array];
    console.log(copyArray)
    copyArray.sort((a, b) => {
        if (a[property] > b[property]) {
            return -1
        }
        if (a[property] < b[property]) {
            return 1
        }
        else return 0;
    })

    for (let i = 0; i < copyArray.length; i++) {
        if (copyArray[i][property] === 0) {
            copyArray.splice(i, 1); i--;
        }
    }

    return copyArray;
}