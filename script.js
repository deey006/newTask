//  FUNCTION FOR TEMPERATURE CONVERTION
function convertFahrToCelsius (x) {
    const num = Number(x)
    let answer
    if (!isNaN(num)){
        let result = (x-32)/1.8
        answer = Number(result.toFixed(4))
        console.log(answer)
        return answer
      }else if (Array.isArray(x)) {
          answer = `${x} is not a valid number but an array`
          console.log(answer)
        return answer
    }else{
        answer = `${JSON.stringify(x)} is not a valid number but a/an ${typeof x}`
        console.log(answer)
      return answer
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
    const n = Number(e)
    array = []
    let validResult
    let invalidResult
    if (!isNaN(n)){
        for (let i = 1; i <= n; i++) {
         array.push(i)
        }
     }else {
         invalidResult = `Invalid Parameter: ${JSON.stringify(e)}`
         console.log(invalidResult)
         return invalidResult
     }
     validResult =  array.map(mapFunc)
     console.log(validResult);
     return validResult;
}








