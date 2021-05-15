//  FUNCTION FOR TEMPERATURE CONVERTION
function convertFahrToCelsius (x) {
    if (typeof x === 'number'){
        let result = (x-32)/1.8
        return Number(result.toFixed(4))
      }else if (Array.isArray(x)) {
        return `${x} is not a valid number but an array}`
    }else{
        return `${JSON.stringify(x)} is not a valid number but a/an ${typeof x}`

    }
}

// FUNCTION FOR CHECK YU GI OH
function mapFunc (element) {
    if (element%2 === 0 && element%3 === 0 && element%5 === 0){
        element = 'Yu-Gi-Oh'
        return element
    } else if (element%3 === 0 && element%5 === 0){
        element = 'Gi-Oh'
        return element
    } else if (element%2 === 0 && element%5 === 0){
        element = 'Yu-Oh'
        return element
    }else if (element%2 === 0 && element%3 === 0){
        element = 'Yu-Gi'
        return element
    }else if (element%5 === 0){
        element = 'Oh'
        return element
    }else if (element%3 === 0){
        element = 'Gi'
        return element
    } else if (element%2 === 0) {
        element = 'Yu'
        return element
    }else{
        return element
    }   }
function checkYuGiOh (e) {
    array = []
    if (typeof e === 'number'){
        for (let i = 1; i <= e; i++) {
         array.push(i)
        }
     }else {
         return `Invalid Parameter: ${JSON.stringify(e)} is meh`
     }
     console.log(array.map(mapFunc))

}




